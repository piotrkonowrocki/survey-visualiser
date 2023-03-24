import {CSSObject} from '@emotion/react'

import {rgba} from '@/utils/rgba'

import {theme} from './theme'

export const base: CSSObject = {
  '::selection': {
    backgroundColor: rgba(theme.color.primary, 0.5),
    color: theme.color.white,
  },
  'html, body': {
    height: '100%',
  },
  body: {
    overflowX: 'hidden',
    overflowY: 'scroll',
    cursor: 'auto',
  },
}
