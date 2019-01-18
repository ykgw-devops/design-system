import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { carbon } from '../../colors'
import { animated, Spring } from 'react-spring'
import { easeLinear as easing } from 'd3-ease'

const Loader = (props) => {
  const { size, color, thickness, className } = props

  const [reset, setReset] = useState(false)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (!reset) { setReset(true) }
  }, [false])

  const radius = (size / 2) - (thickness / 2)
  const circumference = Math.PI * (2 * radius)

  const from = {
    transform: 'rotate(0deg)',
    strokeDasharray: `${(reverse ? 0.8 : 0.2) * circumference}, ${circumference}`
  }

  const to = {
    transform: 'rotate(360deg)',
    strokeDasharray: `${(reverse ? 0.2 : 0.8) * circumference}, ${circumference}`
  }

  return (
    <Spring
      native
      config={{ duration: 750, easing }}
      from={from}
      to={to}
      reset={reset}
      onRest={() => {
        setReverse(!reverse)
      }}
    >
      {style => {
        return (
          <svg
            className={className}
            height={size}
            width={size}
            role='img'
            viewBox={`0 0 ${size} ${size}`}
          >
            <animated.circle
              style={{ transform: style.transform, transformOrigin: '50% 50%' }}
              role='presentation'
              cx='50%'
              cy='50%'
              r={radius}
              stroke={color}
              fill='none'
              strokeWidth={thickness}
              strokeDasharray={style.strokeDasharray}
              strokeLinecap='round'
            />
          </svg>
        )
      }}
    </Spring>
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
  size: 32,
  color: carbon,
  thickness: 4,
  gap: 0.9,
  speed: 1200,
  friction: 15,
  tension: 100
}

export default Loader
