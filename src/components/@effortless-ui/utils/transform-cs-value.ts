import {CSSObject} from '@emotion/react'
import {Properties} from 'csstype'

import {CSAliases} from '@/components/@effortless-ui/types'

const transformCSDefaultValue = (property: keyof Properties, value: string): CSSObject => {
  return {[property]: value}
}

export const transformCSValue: {[key in keyof CSAliases]: (value: string) => CSSObject} = {
  bg: (value): CSSObject => transformCSDefaultValue('background', value),
  bc: (value): CSSObject => transformCSDefaultValue('backgroundColor', value),
  m: (value): CSSObject => transformCSDefaultValue('margin', value),
  mx: (value): CSSObject => {
    return {
      marginRight: value,
      marginLeft: value,
    }
  },
  my: (value): CSSObject => {
    return {
      marginTop: value,
      marginBottom: value,
    }
  },
  mt: (value): CSSObject => transformCSDefaultValue('marginTop', value),
  mr: (value): CSSObject => transformCSDefaultValue('marginRight', value),
  mb: (value): CSSObject => transformCSDefaultValue('marginBottom', value),
  ml: (value): CSSObject => transformCSDefaultValue('marginLeft', value),
  p: (value): CSSObject => transformCSDefaultValue('padding', value),
  px: (value): CSSObject => {
    return {
      paddingRight: value,
      paddingLeft: value,
    }
  },
  py: (value): CSSObject => {
    return {
      paddingTop: value,
      paddingBottom: value,
    }
  },
  pt: (value): CSSObject => transformCSDefaultValue('paddingTop', value),
  pr: (value): CSSObject => transformCSDefaultValue('paddingRight', value),
  pb: (value): CSSObject => transformCSDefaultValue('paddingBottom', value),
  pl: (value): CSSObject => transformCSDefaultValue('paddingLeft', value),
  size: (value): CSSObject => {
    return {
      width: value,
      height: value,
    }
  },
}
