/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/** Two-digit index label, e.g. 0 → "01". */
export function indexLabel(index: number): string {
  return String(index + 1).padStart(2, '0')
}
