/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { base, inline } from './Field.styles'

const FieldComponent = styled('div', {
  shouldForwardProp: isPropValid
})`
  ${base}
  ${props => props.inline && inline}
`

const Field = (props) => (
  <FieldComponent {...props}>
    {props.children}
  </FieldComponent>
)

export default Field
