import {CSSObject} from '@emotion/react'
import {Properties} from 'csstype'
import {DynamicStyle} from 'facepaint'

export interface CSAliases {
  bg: Properties['background']
  bc: Properties['backgroundColor']
  m: Properties['margin']
  mx: Properties['marginRight']
  my: Properties['marginTop']
  mt: Properties['marginTop']
  mr: Properties['marginRight']
  mb: Properties['marginBottom']
  ml: Properties['marginLeft']
  p: Properties['padding']
  px: Properties['paddingRight']
  py: Properties['paddingTop']
  pt: Properties['paddingTop']
  pr: Properties['paddingRight']
  pb: Properties['paddingBottom']
  pl: Properties['paddingLeft']
  size: Properties['width']
}

export type CSObject = (CSSObject | DynamicStyle | Partial<CSAliases>) | CSObject[]
