import React from 'react'
import styled from '@emotion/styled'
import { base } from './Group.styles'

export interface IButtonGroupProps {
  equalWidth?: Boolean;
  fluid?: boolean;
  compact?: boolean;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  ${(props: IButtonGroupProps) => base(props)};
`

const ButtonGroup = (props: IButtonGroupProps) => {
  const { children, ...rest } = props

  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  )
}

export default ButtonGroup
