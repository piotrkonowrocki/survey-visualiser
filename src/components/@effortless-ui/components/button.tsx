import React, {forwardRef} from 'react'

import {Boilerplate, TBoilerplateProps} from '@/components/@effortless-ui/components/boilerplate'

export const Button = forwardRef<unknown, Omit<TBoilerplateProps<'button'>, 'from'>>((props, ref) => {
  return <Boilerplate from="Button" tag="button" ref={ref} {...props} />
})
