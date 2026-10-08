/**
 * Generates web-ready brand assets from the official PLUMBON24 logo.
 *
 * The logo is never redrawn or recolored. This script only:
 *   1. removes the white background (so the logo sits cleanly on any light surface),
 *   2. trims the empty margins,
 *   3. crops the faucet + water drop from the logo for small icons (favicon, app icons).
 *
 * Usage: npm run brand:assets
 * Re-run it whenever assets/brand/plumbon24-logo-original.jpeg is replaced.
 * If the company provides a vector (SVG) logo or an official icon, use those instead.
 */
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const SOURCE = path.join(root, 'assets/brand/plumbon24-logo-original.jpeg')
const out = (file) => path.join(root, file)

// Faucet + water drop inside the original 1774×887 logo, in source pixels.
const MARK_REGION = { left: 925, top: 188, width: 240, height: 264 }

/** Converts white to transparency ("color to alpha"), keeping anti-aliased edges intact. */
async function removeWhiteBackground(input) {
  const { data, info } = await sharp(input)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const rgba = Buffer.alloc(info.width * info.height * 4)
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]]
    const lightest = Math.min(r, g, b)
    // Near-white JPEG noise becomes fully transparent.
    const alpha = lightest >= 248 ? 0 : (255 - lightest) / 255
    if (alpha === 0) continue

    const unblend = (c) => Math.max(0, Math.min(255, Math.round((c - 255 * (1 - alpha)) / alpha)))
    rgba[j] = unblend(r)
    rgba[j + 1] = unblend(g)
    rgba[j + 2] = unblend(b)
    rgba[j + 3] = Math.round(alpha * 255)
  }

  return { rgba, width: info.width, height: info.height }
}

/**
 * Bounding box of the clearly visible artwork. Faint specks (such as the few
 * near-white pixels in the source file's bottom-right corner) are ignored;
 * the padding added by the caller keeps the anti-aliased edges.
 */
function opaqueBounds({ rgba, width, height }) {
  let minX = width
  let minY = height
  let maxX = 0
  let maxY = 0
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (rgba[(y * width + x) * 4 + 3] > 64) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 }
}

function rawImage({ rgba, width, height }) {
  return sharp(rgba, { raw: { width, height, channels: 4 } })
}

/** Places the mark on a white tile so it stays visible on dark browser chrome. */
async function iconTile(mark, size, { radius, fill }) {
  const inner = Math.round(size * fill)
  const markPng = await sharp(mark)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  const tile = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
      `<rect width="${size}" height="${size}" rx="${Math.round(size * radius)}" fill="#ffffff"/></svg>`,
  )

  return sharp(tile)
    .composite([{ input: markPng, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

/** Minimal ICO encoder: stores PNG images, supported by every current browser. */
function encodeIco(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)

  const entries = Buffer.alloc(16 * images.length)
  let offset = header.length + entries.length
  images.forEach(({ size, data }, index) => {
    const e = index * 16
    entries.writeUInt8(size >= 256 ? 0 : size, e)
    entries.writeUInt8(size >= 256 ? 0 : size, e + 1)
    entries.writeUInt16LE(1, e + 4)
    entries.writeUInt16LE(32, e + 6)
    entries.writeUInt32LE(data.length, e + 8)
    entries.writeUInt32LE(offset, e + 12)
    offset += data.length
  })

  return Buffer.concat([header, entries, ...images.map((image) => image.data)])
}

async function main() {
  const transparent = await removeWhiteBackground(SOURCE)

  // 1. Full logo, transparent background, trimmed with a small safety margin, then centered on a
  //    canvas with an exact 2.56:1 ratio so resized versions (128/256/384/640px wide) keep whole-pixel heights.
  const bounds = opaqueBounds(transparent)
  const pad = 6
  const trimmed = await rawImage(transparent)
    .extract({
      left: Math.max(0, bounds.left - pad),
      top: Math.max(0, bounds.top - pad),
      width: Math.min(transparent.width - bounds.left + pad, bounds.width + pad * 2),
      height: Math.min(transparent.height - bounds.top + pad, bounds.height + pad * 2),
    })
    .png()
    .toBuffer({ resolveWithObject: true })
  // Width rounded up to a multiple of 64 keeps width / 2.56 a whole number (e.g. 1600 × 625).
  const RATIO = 2.56
  let canvasWidth = Math.ceil(trimmed.info.width / 64) * 64
  while (canvasWidth / RATIO < trimmed.info.height) canvasWidth += 64
  const canvasHeight = canvasWidth / RATIO
  const padX = canvasWidth - trimmed.info.width
  const padY = canvasHeight - trimmed.info.height
  const logo = await sharp(trimmed.data)
    .extend({
      left: Math.floor(padX / 2),
      right: Math.ceil(padX / 2),
      top: Math.floor(padY / 2),
      bottom: Math.ceil(padY / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toBuffer({ resolveWithObject: true })
  await writeFile(out('public/brand/plumbon24-logo.png'), logo.data)
  console.log(`logo        ${logo.info.width}×${logo.info.height}`)

  // 2. Brand mark (faucet + drop) cropped from the logo, squared on a transparent canvas.
  const markCrop = await rawImage(transparent).extract(MARK_REGION).png().toBuffer()
  const markTrimmed = await sharp(markCrop).trim().png().toBuffer({ resolveWithObject: true })
  const side = Math.max(markTrimmed.info.width, markTrimmed.info.height)
  const mark = await sharp({
    create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: markTrimmed.data, gravity: 'center' }])
    .png()
    .toBuffer()
  await writeFile(out('public/brand/plumbon24-mark.png'), await sharp(mark).resize(512, 512).png().toBuffer())
  console.log(`mark        ${side}×${side} → 512×512`)

  // 3. Favicons and app icons.
  await writeFile(out('app/icon.png'), await iconTile(mark, 512, { radius: 0.22, fill: 0.74 }))
  await writeFile(out('app/apple-icon.png'), await iconTile(mark, 180, { radius: 0, fill: 0.7 }))
  await writeFile(out('public/brand/icon-192.png'), await iconTile(mark, 192, { radius: 0.22, fill: 0.74 }))
  await writeFile(out('public/brand/icon-512.png'), await iconTile(mark, 512, { radius: 0.22, fill: 0.74 }))
  // Maskable icons need the artwork inside the central 80% safe zone.
  await writeFile(out('public/brand/icon-maskable-512.png'), await iconTile(mark, 512, { radius: 0, fill: 0.56 }))

  const icoSizes = [16, 32, 48]
  const icoImages = await Promise.all(
    icoSizes.map(async (size) => ({ size, data: await iconTile(mark, size, { radius: 0.2, fill: 0.84 }) })),
  )
  await writeFile(out('app/favicon.ico'), encodeIco(icoImages))
  console.log('icons       app/icon.png, app/apple-icon.png, app/favicon.ico, public/brand/icon-*.png')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
