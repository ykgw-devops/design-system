import React from 'react'

import { cx } from 'emotion'
import { base } from './style.jsx'

const Segment = props => {
  return (
    <div {...props} className={cx(base, props.className)}>
      {props.children}
    </div>
  )
}

export default Segment
