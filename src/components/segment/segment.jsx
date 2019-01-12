/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import { base } from './segment.styles.jsx'

const Segment = props => {
  return (
    <div {...props} css={[base, props.className]}>
      {props.children}
    </div>
  )
}

export default Segment
