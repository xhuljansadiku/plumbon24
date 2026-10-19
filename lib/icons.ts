/**
 * PLUMBON24 line-icon set — one consistent style: 24×24 grid, round caps and joins, stroke = currentColor.
 *
 * Icons are served once as a cached SVG sprite (app/icons.svg/route.ts) and referenced with <use>,
 * so each page carries a tiny reference instead of repeating the full path data.
 * Stroke width and color come from the <svg> that references the icon (see components/ui/Icon.tsx).
 */
export const iconPaths = {
  'arrow-right': '<path d="M4.5 12h15"/><path d="m13.5 6 6 6-6 6"/>',
  'arrow-up': '<path d="M12 19.5v-15"/><path d="m6 10.5 6-6 6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7"/><path d="M8.5 7H17v8.5"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-right': '<path d="m9 6 6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 6.5h16M4 12h16M4 17.5h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="m4.5 12.5 5 5 10-11"/>',
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12.3 2.8 2.8L16 9.8"/>',
  phone:
    '<path d="M6.6 3.5h2.2c.5 0 .9.3 1 .8l.8 3.4c.1.4-.1.9-.4 1.1L8.4 10a12.5 12.5 0 0 0 5.6 5.6l1.2-1.8c.2-.4.7-.5 1.1-.4l3.4.8c.5.1.8.5.8 1v2.2a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.6 5.6a2 2 0 0 1 2-2.1Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  'map-pin': '<path d="M12 21.5s-7-6-7-11.6a7 7 0 1 1 14 0c0 5.6-7 11.6-7 11.6Z"/><circle cx="12" cy="9.9" r="2.6"/>',
  map: '<path d="M9 4.5 3.5 6.5v13l5.5-2 6 2 5.5-2v-13l-5.5 2-6-2Z"/><path d="M9 4.5v13M15 6.5v13"/>',
  directions: '<path d="M3.5 11.5 20 4l-7.5 16.5-2-7-7-2Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  'shield-check':
    '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  home: '<path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5.5h4V20"/>',
  building:
    '<path d="M5 21V4.8c0-.5.4-.8.8-.8h12.4c.4 0 .8.3.8.8V21"/><path d="M3 21h18"/><path d="M9 7.5h1.5M13.5 7.5H15M9 11h1.5M13.5 11H15M9 14.5h1.5M13.5 14.5H15"/><path d="M10.5 21v-3h3v3"/>',
  droplet:
    '<path d="M12 3.2c3.6 4.3 6.2 7.7 6.2 10.9a6.2 6.2 0 0 1-12.4 0c0-3.2 2.6-6.6 6.2-10.9Z"/><path d="M9.2 14.6a2.8 2.8 0 0 0 2.8 2.8"/>',
  pipe: '<path d="M2.5 7H11a6 6 0 0 1 6 6v8.5"/><path d="M2.5 11H11a2 2 0 0 1 2 2v8.5"/><path d="M6.5 5.5v7M11.5 17.5h7"/>',
  repipe: '<path d="M2.5 8h19"/><path d="M2.5 12.5H10v9M21.5 12.5H14v9"/><path d="M6.5 6.5V14M17.5 6.5V14M8.5 17.5h7"/>',
  faucet:
    '<path d="M8 4.5h6M11 4.5V8"/><path d="M3 8h11.5a5 5 0 0 1 5 5v1.5"/><path d="M3 12h10.5a1 1 0 0 1 1 1v1.5"/><path d="M14.5 14.5h5M3 6.5v7"/><path d="M17 17.4c.8 1 1.3 1.8 1.3 2.4a1.3 1.3 0 0 1-2.6 0c0-.6.5-1.4 1.3-2.4Z"/>',
  drain:
    '<circle cx="12" cy="12" r="8.5"/><path d="M12 12h.01M16.2 12h.01M14.1 15.64h.01M9.9 15.64h.01M7.8 12h.01M9.9 8.36h.01M14.1 8.36h.01" stroke-width="2.6"/>',
  sewer: '<path d="M2.5 5.5h19"/><path d="M6 5.5V13a4.5 4.5 0 0 0 4.5 4.5h11"/><path d="M10 5.5v7a1 1 0 0 0 1 1h10.5"/><path d="M15.5 12v7"/>',
  leak:
    '<path d="M2 6h7.5l1.2 1.8L12.5 6H22"/><path d="M2 10.5h20"/><path d="M9.5 14c.9 1.1 1.4 1.9 1.4 2.5a1.4 1.4 0 1 1-2.8 0c0-.6.5-1.4 1.4-2.5Z"/><path d="M14.5 16.5c.9 1.1 1.4 1.9 1.4 2.5a1.4 1.4 0 1 1-2.8 0c0-.6.5-1.4 1.4-2.5Z"/>',
  'leak-search':
    '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.3 15.3 5.2 5.2"/><path d="M10.5 7.3c1.4 1.7 2.2 2.9 2.2 3.9a2.2 2.2 0 0 1-4.4 0c0-1 .8-2.2 2.2-3.9Z"/>',
  'water-heater':
    '<path d="M6.5 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v11.5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5Z"/><path d="M10 4V2M14 4V2M8.5 20v1.5M15.5 20v1.5"/><path d="M12 17.2c1.3-1 1.9-1.9 1.9-2.9 0-1-.8-1.8-1.9-3-1.1 1.2-1.9 2-1.9 3 0 1 .6 1.9 1.9 2.9Z"/>',
  toilet:
    '<rect x="4.5" y="3" width="7" height="7" rx="1"/><path d="M3 10h18c0 3.9-3.1 7-7 7h-4.5"/><path d="M3 10c0 2.8 1.7 5.2 4.2 6.3L6.5 21h9l-.5-4"/>',
  disposal:
    '<path d="M2.5 6h19"/><path d="M5 6v1.5A4.5 4.5 0 0 0 9.5 12h5A4.5 4.5 0 0 0 19 7.5V6"/><rect x="8.5" y="12" width="7" height="8.5" rx="1.75"/><path d="M15.5 15h3.5M10.75 16.5h2.5"/>',
  pump: '<path d="M3.5 8v12.5h17V8"/><path d="M3.5 15c1.5 0 1.5-1 3-1M17.5 14c1.5 0 1.5 1 3 1"/><rect x="8.5" y="12" width="7" height="6.5" rx="1.5"/><path d="M12 12V3.5h6"/>',
  backflow:
    '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="M12 8.3c1.6 1.9 2.5 3.2 2.5 4.3a2.5 2.5 0 0 1-5 0c0-1.1.9-2.4 2.5-4.3Z"/>',
  valve: '<path d="M2.5 12h4.5M17 12h4.5M2.5 9.5v5M21.5 9.5v5"/><path d="M7 8.5 17 15.5V8.5L7 15.5Z"/><path d="M12 12V5M9.5 5h5"/>',
  'water-meter': '<circle cx="12" cy="12" r="5.5"/><path d="M2.5 12h4M17.5 12h4M2.5 9.5v5M21.5 9.5v5"/><path d="m12 12 2.4-2.4"/>',
  flame:
    '<path d="M12 21.5c3.8 0 6.8-2.8 6.8-6.6 0-3-1.8-5.3-3.5-7-.5 1.8-1.4 2.9-2.6 3.4.4-3.2-.8-6.2-3.5-8.3.2 3-1.4 5-3 6.9C5 11.6 5.2 13.3 5.2 15c0 3.7 3 6.5 6.8 6.5Z"/><path d="M12 21.5a2.7 2.7 0 0 1-2.7-2.7c0-1.5 1.1-2.6 2.7-4.3 1.6 1.7 2.7 2.8 2.7 4.3a2.7 2.7 0 0 1-2.7 2.7Z"/>',
  bath: '<path d="M3 12h18v1.5A5.5 5.5 0 0 1 15.5 19h-7A5.5 5.5 0 0 1 3 13.5Z"/><path d="m7 19-1 2M17 19l1 2"/><path d="M6 12V6a2.5 2.5 0 0 1 4.8-1"/><path d="m9.5 6.5 3-1.6"/>',
  kitchen:
    '<path d="M2.5 13h19"/><path d="M5 13v.5A4.5 4.5 0 0 0 9.5 18h5a4.5 4.5 0 0 0 4.5-4.5V13"/><path d="M8 13V7a3 3 0 0 1 6 0v1.5"/><path d="M8 10H5.5"/><path d="M14 11v.01" stroke-width="2.4"/>',
  toolbox:
    '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v2"/><path d="M3 13.5h18M10.5 12.5v2.5h3v-2.5"/>',
  gauge: '<path d="M4.2 17.5a8.5 8.5 0 1 1 15.6 0"/><path d="m12 13.5 4-4"/><circle cx="12" cy="13.5" r="1.4"/><path d="M12 5.5V7M6.4 7.9l1 1M17.6 7.9l-1 1"/>',
  wrench:
    '<path d="M14.8 3.6a5 5 0 0 0-5.4 6.6l-5.6 5.6a2.1 2.1 0 1 0 3 3l5.6-5.6a5 5 0 0 0 6.6-5.4l-3 3-2.7-.6-.6-2.7 3-3-.9-.9Z"/>',
  'clipboard-check': '<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><rect x="9" y="2.5" width="6" height="4" rx="1"/><path d="m9 13.5 2.2 2.2L15.5 11"/>',
  alert:
    '<path d="M10.3 4.2 2.6 17.6a2 2 0 0 0 1.7 2.9h15.4a2 2 0 0 0 1.7-2.9L13.7 4.2a2 2 0 0 0-3.4 0Z"/><path d="M12 9.5V14M12 17.2h.01"/>',
  message:
    '<path d="M5 4.5h14A1.5 1.5 0 0 1 20.5 6v9.5A1.5 1.5 0 0 1 19 17h-8l-5 4v-4H5a1.5 1.5 0 0 1-1.5-1.5V6A1.5 1.5 0 0 1 5 4.5Z"/>',
  camera:
    '<path d="M4.5 8H7l1.8-2.6c.2-.3.5-.4.8-.4h4.8c.3 0 .6.1.8.4L17 8h2.5A1.5 1.5 0 0 1 21 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-9A1.5 1.5 0 0 1 4.5 8Z"/><circle cx="12" cy="13.5" r="3.5"/>',
  star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12h.01"/>',
  badge: '<circle cx="12" cy="9.5" r="6"/><path d="M8.6 14.4 7.5 21l4.5-2.4 4.5 2.4-1.1-6.6"/><path d="m9.6 9.6 1.7 1.7 3.1-3.2"/>',
  upload: '<path d="M12 15.5V4.5M7.5 9 12 4.5 16.5 9"/><path d="M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15"/>',
  trash:
    '<path d="M4.5 7h15M9.5 7V4.5h5V7"/><path d="m6.5 7 .9 12.1a1.5 1.5 0 0 0 1.5 1.4h6.2a1.5 1.5 0 0 0 1.5-1.4L17.5 7"/><path d="M10.5 11v5.5M13.5 11v5.5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8h.01"/>',
  spinner: '<path d="M12 3a9 9 0 1 0 9 9"/>',
  external:
    '<path d="M14 4.5h5.5V10M19.5 4.5 11 13"/><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>',
  snowflake: '<path d="M12 2.5v19M3.8 7.25l16.4 9.5M3.8 16.75l16.4-9.5"/><path d="m9.5 4 2.5 2 2.5-2M9.5 20l2.5-2 2.5 2"/>',
  boiler:
    '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 6.5h6"/><path d="M12 17c-1.5 0-2.5-1-2.5-2.3 0-1.6 1.4-2.4 2.5-4.2 1.1 1.8 2.5 2.6 2.5 4.2 0 1.3-1 2.3-2.5 2.3Z"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.2 6.8h.01"/>',
} as const

export type IconName = keyof typeof iconPaths

/** Builds the sprite document served at /icons.svg. */
export function buildIconSprite(): string {
  const symbols = Object.entries(iconPaths)
    .map(([name, paths]) => `<symbol id="${name}" viewBox="0 0 24 24">${paths}</symbol>`)
    .join('')
  return `<svg xmlns="http://www.w3.org/2000/svg">${symbols}</svg>`
}

/** Short content hash so the sprite URL changes whenever an icon changes (safe to cache forever). */
function hash(input: string): string {
  let value = 5381
  for (let index = 0; index < input.length; index++) value = ((value << 5) + value + input.charCodeAt(index)) | 0
  return (value >>> 0).toString(36)
}

export const ICON_SPRITE_URL = `/icons.svg?v=${hash(buildIconSprite())}`
