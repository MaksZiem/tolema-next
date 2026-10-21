export function noOrphans(text: string): string {
  return text.replace(/(?<=^|[\s („])([aiouwzAIOUWZ]) /g, "$1 ");
}
