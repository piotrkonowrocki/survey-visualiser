import {castToArray} from '@/components/@effortless-ui/utils'

export const toMediaQueryArray = <T>(array: T | T[], fn: (item: T) => string | null): (string | null)[] => {
  return castToArray(array).map((item) => (item ? fn(item) : null))
}
