import {CSObject} from '@/components/@effortless-ui/types'
import {EffortlessThemeComponentsTypes} from '@/components/@effortless-ui/types/components'

type EffortlessThemeSet = {
  [k in EffortlessThemeComponentsTypes]?: {[i: string]: CSObject}
}

export interface EffortlessTheme {
  breakpoints?: number[]
  gutter?: {
    x?: number
    y?: number
  }
  tags?: {
    [k in EffortlessThemeComponentsTypes]?: {
      [i in keyof JSX.IntrinsicElements]?: CSObject
    }
  }
  compositions?: EffortlessThemeSet
  variants?: EffortlessThemeSet
}
