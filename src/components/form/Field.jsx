/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import { base } from './Field.styles'

const Field = (props) => (
  <div css={base} {...props}>
    {props.children}
  </div>
)

export default Field
