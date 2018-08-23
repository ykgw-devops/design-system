import React from 'react'

import { cx } from '../../emotion'
import { base, input, leftAdornments as leftStyle, rightAdornments as rightStyle } from './style'
import PropTypes from 'prop-types'
import { omit } from 'lodash-es'

const noop = () => undefined

const Input = props => {
  const { adornments = [] } = props
  const leftAdornments = adornments.filter(a => a.position === 'left')
  const rightAdornments = adornments.filter(a => a.position === 'right')

  return (
    <div className={cx(base, props.className)}>
      {leftAdornments.length > 0 && (
        <span className={leftStyle}>
          {leftAdornments.map(adornment => adornment.content)}
        </span>
      )}
      <input {...omit(props, 'adornments')} className={input} />
      {rightAdornments.length > 0 && (
        <span className={rightStyle}>
          {rightAdornments.map(adornment => adornment.content)}
        </span>
      )}
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  adornments: PropTypes.array
}

Input.defaultProps = {
  onChange: noop
}

export default Input
