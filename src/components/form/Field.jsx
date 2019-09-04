/** @jsx jsx */
import { jsx } from '@emotion/core'
import { base } from './Field.styles'

const Field = (props) => (
  <div css={base} {...props}>
    {props.children}
  </div>
)

export default Field
