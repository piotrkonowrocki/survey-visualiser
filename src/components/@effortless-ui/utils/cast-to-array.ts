/**
 * Takes any value and returns it as array of those values if wasn't an array already
 * @template T type of single item
 * @param item single item or array
 * @returns array of items
 */
export const castToArray = <T>(item: T | T[]): T[] => {
  return Array.isArray(item) ? item : [item]
}
