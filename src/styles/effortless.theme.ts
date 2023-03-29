import {CSObject, EffortlessTheme} from '@effortless-ui'

import {theme} from './theme'

const headerStyles: CSObject = {
  mx: 0,
  mt: 0,
  mb: theme.spacing.base,
  fontWeight: 700,
}

export const effortlessTheme: EffortlessTheme = {
  breakpoints: theme.breakpoints,
  gutter: {
    x: theme.spacing.l,
    y: theme.spacing.l,
  },
  tags: {
    Text: {
      h1: [{fontSize: [theme.font.size.base * 1.6, theme.font.size.base * 2.2]}, headerStyles],
      h2: [{fontSize: [theme.font.size.base * 1.45, theme.font.size.base * 1.9]}, headerStyles],
      h3: [{fontSize: [theme.font.size.base * 1.3, theme.font.size.base * 1.6]}, headerStyles],
      h4: [{fontSize: [theme.font.size.base * 1.15, theme.font.size.base * 1.3]}, headerStyles],
      h5: [headerStyles],
      h6: [headerStyles],
      p: {
        mx: 0,
        mt: 0,
        mb: theme.spacing.base,
        '&:last-child': {
          mb: 0,
        },
      },
    },
    Button: {
      button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: theme.spacing.s,
        cursor: 'pointer',
        transition: 'opacity 200ms, background-color 200ms, color 200ms',
        '&:disabled': {
          opacity: 0.65,
          cursor: 'default',
        },
      },
    },
  },
  compositions: {
    Box: {
      semanticList: {
        listStyle: 'none',
        p: 0,
        m: 0,
      },
    },
  },
  variants: {
    Box: {
      card: {
        p: theme.spacing.l,
        bg: theme.color.foreground,
        boxShadow: theme.shadow.card,
        borderRadius: theme.radii.base,
      },
    },
    Button: {
      pill: {
        bg: theme.color.foreground,
        px: theme.spacing.base,
        py: theme.spacing.xs,
        fontSize: theme.font.size.base,
        fontWeight: 'bold',
        color: theme.color.text,
        border: '2px solid',
        borderColor: theme.color.primary,
        borderRadius: theme.radii.base,
        cursor: 'pointer',
        '&:hover': {
          bg: theme.color.primaryFaded,
        },
        '&:active': {
          bg: theme.color.primary,
        },
        ':disabled': {
          bg: theme.color.foreground,
        },
      },
    },
  },
}
