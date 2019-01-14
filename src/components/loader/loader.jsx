import PropTypes from 'prop-types'
import React from 'react'
import { cx } from '../../emotion'
import { carbon } from '../../colors'
import { base } from './loader.styles'

const Loader = (props) => {
  const { size, color, thickness, gap, speed, className } = props

  return (
    <svg
      height={size}
      width={size}
      {...props}
      className={cx(base, className)}
      style={{animationDuration: `${speed}ms`}}
      role='img'
      aria-labelledby='title desc'
      viewBox='0 0 32 32'
    >
      <circle
        role='presentation'
        cx={16}
        cy={16}
        r={14 - (thickness / 2)}
        stroke={color}
        fill='none'
        strokeWidth={thickness}
        strokeDasharray={Math.PI * 2 * (11 - gap)}
        strokeLinecap='round'
      />
    </svg>
  )
}

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  thickness: PropTypes.number,
  gap: PropTypes.number,
  speed: PropTypes.number
}

Loader.defaultProps = {
  size: 20,
  color: carbon,
  thickness: 4,
  gap: 2,
  speed: 1200
}

export default Loader
