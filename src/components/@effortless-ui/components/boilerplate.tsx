import React, {ComponentPropsWithRef, ElementType, forwardRef} from 'react'
import {css} from '@emotion/react'

import {useEffortlessTheme} from '@/components/@effortless-ui/hooks'
import {Assign, CSObject, EffortlessThemeComponentsTypes} from '@/components/@effortless-ui/types'
import {castToArray, transformCSProperty} from '@/components/@effortless-ui/utils'

interface IBoilerplateProps {
  composition?: string | string[]
  cs?: CSObject
  from: EffortlessThemeComponentsTypes
  tag?: ElementType
  variant?: string
}

export type TBoilerplateProps<T extends ElementType> = Omit<Assign<ComponentPropsWithRef<T>, IBoilerplateProps>, 'ref'>

export const Boilerplate = forwardRef<unknown, IBoilerplateProps>(({composition, cs, from, tag = 'div', variant, ...props}, ref) => {
  const {mediaQuery, theme} = useEffortlessTheme()

  const Component = tag
  const themeTag = tag as keyof JSX.IntrinsicElements

  const variantStyles =
    variant && theme?.variants?.[from]?.[variant] ? [mediaQuery(theme.variants[from]?.[variant] as CSObject), {label: variant}] : []
  const compositionStyles = composition
    ? castToArray(composition).map((item) =>
        Object.keys(theme?.compositions?.[from] || {}).includes(item as string)
          ? mediaQuery(theme?.compositions?.[from]?.[item as string] as CSObject)
          : {},
      )
    : []
  const tagStyles = theme?.tags?.[from]?.[themeTag] ? [mediaQuery(theme.tags[from]?.[themeTag] as CSObject)] : []
  const csStyles = cs ? [mediaQuery(cs)] : []

  const styles: CSObject[] = [
    ...(tagStyles.length ? [transformCSProperty(tagStyles)] : []),
    ...(compositionStyles.length ? [transformCSProperty(compositionStyles)] : []),
    ...(variantStyles.length ? [transformCSProperty(variantStyles)] : []),
    ...(csStyles.length ? [transformCSProperty(csStyles), {label: from}] : []),
  ]

  return (
    <Component
      {...{
        ref,
        ...(styles.length && {css: css(styles)}),
        ...props,
      }}
    />
  )
})
