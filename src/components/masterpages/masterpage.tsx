import React, {FC, ReactNode} from 'react'
import {CSSObject, Global} from '@emotion/react'
import Head from 'next/head'

import {siteName} from '@/dictionaries/site.dictionary'

import DefaultMasterpage from './default/default'
import EmptyMasterpage from './empty/empty'

interface IMasterPageProps {
  template?: 'default' | 'empty'
  title?: string
  subtitle?: string | string[]
  bodyCss?: CSSObject
  children: ReactNode
}

const MasterPage: FC<IMasterPageProps> = ({template = 'default', title = siteName, subtitle, bodyCss, children}) => {
  const documentTitle = [...(subtitle ? [subtitle] : []), title].flat().join(' - ')

  return (
    <>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Tech debt & developers experiance surveys data visualiser" key="meta-description" />
        <link rel="icon" href="/favicon.ico" />
        {/* Generate your complete favicon using https://realfavicongenerator.net/ */}
      </Head>
      <Global styles={{body: bodyCss}} />
      {
        {
          default: <DefaultMasterpage>{children}</DefaultMasterpage>,
          empty: <EmptyMasterpage>{children}</EmptyMasterpage>,
        }[template]
      }
    </>
  )
}

export default MasterPage
