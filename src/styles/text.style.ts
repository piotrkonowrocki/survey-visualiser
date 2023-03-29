import {CSSObject} from '@emotion/react'

import {theme} from '@/styles/theme'

export const text: CSSObject = {
  html: {
    fontSize: theme.font.size.base,
  },
  body: {
    color: theme.color.text,
    fontFamily: theme.font.family.sansSerif,
    lineHeight: theme.font.spacing.base,
  },
  a: {
    color: theme.color.primary,
    textDecoration: 'underline',
    cursor: 'pointer',
    transition: '200ms color',
    '&:hover, &:active': {
      textDecoration: 'none',
    },
  },
}
