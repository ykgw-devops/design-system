import React from 'react'
import PropTypes from 'prop-types'
import { filter, map, omit } from 'lodash'

import { cx } from '../../emotion'
import { base, input, leftAdornments as leftStyle, rightAdornments as rightStyle } from './input.styles'

const Input = props => {
  const { adornments = [] } = props

  const leftAdornments = filter(adornments, { position: 'left' })
  const rightAdornments = filter(adornments, { position: 'right' })

  return (
    <div className={cx(base, props.className)}>
      {leftAdornments.length > 0 && (
        <span className={leftStyle}>
          {map(leftAdornments, 'content')}
        </span>
      )}
      <input {...omit(props, 'adornments')} className={input} />
      {rightAdornments.length > 0 && (
        <span className={rightStyle}>
          {map(rightAdornments, 'content')}
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
  onChange: () => undefined
}

export default Input
