import React, {createContext, FC, ReactNode} from 'react'
import facepaint, {DynamicStyleFunction} from 'facepaint'

import {EffortlessTheme} from '@/components/@effortless-ui/types'

interface EffortlessThemeContextProps {
  children?: ReactNode
  theme?: EffortlessTheme
  mediaQuery: DynamicStyleFunction
}

export const effortlessThemeDefaultContextProps: EffortlessThemeContextProps = {
  mediaQuery: facepaint([]),
}

export const EffortlessThemeContext = createContext<EffortlessThemeContextProps>(effortlessThemeDefaultContextProps)

export const EffortlessThemeProvider: FC<EffortlessThemeContextProps> = ({children, theme}) => {
  const state = {
    mediaQuery: facepaint(theme?.breakpoints?.map((breakpoint) => `@media (min-width: ${breakpoint}px)`) ?? []),
    theme: theme ?? {},
  }

  return <EffortlessThemeContext.Provider value={state}>{children}</EffortlessThemeContext.Provider>
}
