import React, {forwardRef} from 'react'

import {Boilerplate, TBoilerplateProps} from '@/components/@effortless-ui/components/boilerplate'

export const Anchor = forwardRef<unknown, Omit<TBoilerplateProps<'a'>, 'from'>>((props, ref) => {
  return <Boilerplate from="Anchor" tag="a" ref={ref} {...props} />
})
