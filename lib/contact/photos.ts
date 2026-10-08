/**
 * Browser-side photo preparation: large photos from phones are resized and re-encoded
 * as JPEG before upload so a request with several photos stays within upload limits.
 */

const RESIZABLE = new Set(['image/jpeg', 'image/png', 'image/webp'])
const MAX_EDGE = 1920
const SKIP_BELOW_BYTES = 700 * 1024

export function isLikelyImage(file: File): boolean {
  return file.type.startsWith('image/') || /\.(heic|heif)$/i.test(file.name)
}

export async function preparePhoto(file: File): Promise<File> {
  if (!RESIZABLE.has(file.type) || file.size < SKIP_BELOW_BYTES) return file

  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height))
    const width = Math.round(bitmap.width * scale)
    const height = Math.round(bitmap.height * scale)

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    if (!context) return file

    context.fillStyle = '#ffffff' // JPEG has no transparency
    context.fillRect(0, 0, width, height)
    context.drawImage(bitmap, 0, 0, width, height)
    bitmap.close()

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.82))
    if (!blob || blob.size >= file.size) return file

    const name = `${file.name.replace(/\.[^.]+$/, '') || 'photo'}.jpg`
    return new File([blob], name, { type: 'image/jpeg', lastModified: file.lastModified })
  } catch {
    return file
  }
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
