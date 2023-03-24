import React, {forwardRef} from 'react'

import {Boilerplate, TBoilerplateProps} from '@/components/@effortless-ui/components/boilerplate'

export const Box = forwardRef<unknown, Omit<TBoilerplateProps<'div'>, 'from'>>((props, ref) => {
  return <Boilerplate from="Box" ref={ref} {...props} />
})
