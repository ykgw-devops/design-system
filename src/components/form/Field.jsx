/** @jsx jsx */
import { jsx } from '@emotion/core'
import { base, inline } from './Field.styles'

const Field = (props) => (
  <div css={[base, props.inline && inline]} {...props}>
    {props.children}
  </div>
)

export default Field
