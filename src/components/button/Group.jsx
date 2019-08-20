/** @jsx jsx */
import { jsx } from '@emotion/core'

import { base } from './Group.styles'

const ButtonGroup = ({ children, ...rest }) => (
  <div {...rest} css={base}>
    {children}
  </div>
)

export default ButtonGroup
