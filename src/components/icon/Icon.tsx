import { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { withProps } from 'recompose'

import { base, colored, circular, filled } from './Icon.style'

export interface IIconProps extends HTMLAttributes<HTMLLIElement> {
  name: string;
  circular?: boolean;
  filled?: boolean;
  color?: string;
}

const Icon = styled.i((props: IIconProps) => [
  base,
  colored(props),
  props.circular && circular(props),
  (props.circular && props.filled) && filled(props)
])

const iconProps = (props: IIconProps) => ({
  children: props.name as React.ReactNode,
  className: `material-icons ${props.className || ''}`,
  role: 'img',
  'aria-label': props.name
})

export default withProps(iconProps)(Icon)
