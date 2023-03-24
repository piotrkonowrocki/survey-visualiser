import React, {forwardRef} from 'react'

import {Boilerplate, TBoilerplateProps} from '@/components/@effortless-ui/components/boilerplate'

type AllowedTypes = 'address' | 'number' | 'text' | 'tel'

interface InputProps {
  type: AllowedTypes
}

export const Input = forwardRef<unknown, Omit<TBoilerplateProps<'input'> & InputProps, 'from'>>((props, ref) => {
  return <Boilerplate from="Box" tag="input" ref={ref} {...props} />
})
