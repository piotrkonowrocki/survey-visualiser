import {CSSObject} from '@emotion/react'

import {theme} from '@/styles/theme'
import {rgba} from '@/utils/rgba'

export const base: CSSObject = {
  '::selection': {
    backgroundColor: rgba(theme.color.primary, 0.5),
    color: theme.color.white,
  },
  'html, body': {
    height: '100%',
  },
  body: {
    backgroundColor: theme.color.background,
    overflowX: 'hidden',
    overflowY: 'scroll',
    cursor: 'auto',
  },
}
