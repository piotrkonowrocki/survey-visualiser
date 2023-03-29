import React, {forwardRef} from 'react'

import {Boilerplate, TBoilerplateProps} from '@/components/@effortless-ui/components/boilerplate'

type AllowedTags = 'address' | 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'pre' | 'small' | 'span'

interface TextProps {
  tag?: AllowedTags
}

export const Text = forwardRef<unknown, Omit<TBoilerplateProps<'p'> & TextProps, 'from'>>(({tag = 'p', ...props}, ref) => {
  return <Boilerplate from="Text" tag={tag} ref={ref} {...props} />
})
