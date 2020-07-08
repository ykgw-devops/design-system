import React, { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { setDisplayName } from 'recompose'

import Group from './Group'
import Loader from '../loader/Loader'

import { base, kind, outline, pill, disabled, size, colorFromProps } from './Button.styles'

type ButtonKind = 'primary' | 'secondary' | 'warning' | 'danger' | 'success'
type ButtonSize = 'tiny' | 'small' | 'medium' | 'large'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  pill?: boolean;
  disabled?: boolean;
  loading?: boolean;
  kind?: ButtonKind;
  size?: ButtonSize;
}

const ValidButton = styled('button', { shouldForwardProp: isPropValid })

const Button = ValidButton<IButtonProps>`
  ${base};
  ${props => kind(props)};
  ${props => size(props)};
  ${props => props.outline && outline(props)};
  ${props => props.pill && pill};
  ${props => props.disabled && disabled(props)};
`

const EnhancedButton = React.forwardRef((props: IButtonProps, ref: React.Ref<any>) => {
  const { loading, children, ...rest } = props

  return (
    <Button {...rest} ref={ref}>
      {loading && (
        <>
          <Loader
            color={colorFromProps(props)}
            size={14}
            thickness={2}
          />
          &nbsp;
        </>
      )}
      {children}
    </Button>
  )
})

EnhancedButton.Group = setDisplayName('Button.Group')(Group)

EnhancedButton.defaultProps = {
  type: 'button',
  kind: 'primary',
  size: 'medium',
  pill: false,
  outline: false,
  disabled: false,
  loading: false
}

export default EnhancedButton
