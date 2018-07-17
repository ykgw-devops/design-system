import React from 'react'

import { cx } from '../../emotion'
import { base } from './style.jsx'
import PropTypes from 'prop-types'

const noop = () => undefined

const Input = props => {
  return (
    <input {...props} className={cx(base)} />
  )
}

Input.propTypes = {
  onChange: PropTypes.func
}

Input.defaultProps = {
  onChange: noop
}

export default Input
