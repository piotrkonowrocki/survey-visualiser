import React from 'react'
import {effortlessThemeDefaultContextProps, EffortlessThemeProvider} from '@effortless-ui'
import {Global} from '@emotion/react'
import {AppProps} from 'next/app'

import {base} from '@/styles/base.style'
import {effortlessTheme} from '@/styles/effortless.theme'
import {text} from '@/styles/text.style'

import '@/styles/vendors.scss'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <EffortlessThemeProvider theme={effortlessTheme} {...effortlessThemeDefaultContextProps}>
      <Global styles={[base, text]} />
      <Component {...pageProps} />
    </EffortlessThemeProvider>
  )
}

export default App
