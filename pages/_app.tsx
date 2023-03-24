import React from 'react'
import {Global} from '@emotion/react'
import {AppProps} from 'next/app'

import {base} from '@/styles/base.style'
import {text} from '@/styles/text.style'

import '@/styles/vendors.scss'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Global styles={[base, text]} />
      <Component {...pageProps} />
    </>
  )
}

export default App
