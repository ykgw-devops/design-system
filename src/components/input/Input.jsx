import React from 'react'
import PropTypes from 'prop-types'
import { filter, map, omit } from 'lodash'

import { base, input, leftAdornments as leftStyle, rightAdornments as rightStyle } from './Input.styles'

const Input = props => {
  const { adornments = [] } = props

  const leftAdornments = filter(adornments, { position: 'left' })
  const rightAdornments = filter(adornments, { position: 'right' })

  return (
    <div css={base}>
      {leftAdornments.length > 0 && (
        <span css={leftStyle}>
          {map(leftAdornments, 'content')}
        </span>
      )}
      <input {...omit(props, 'adornments')} css={input} />
      {rightAdornments.length > 0 && (
        <span css={rightStyle}>
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
  onChange: () => undefined,
  adornments: []
}

export default Input
