import React from 'react'

import { cx } from '../../emotion'
import { base } from './style.jsx'

const Input = props => {
  return (
    <input {...props} className={cx(base)} />
  )
}

export default Input
