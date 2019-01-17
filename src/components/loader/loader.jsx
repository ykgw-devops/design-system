import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { carbon } from '../../colors'
import { animated, Spring, config } from 'react-spring'

const Loader = (props) => {
  const { size, color, thickness, className, friction, tension } = props

  const [reset, setReset] = useState(false)

  useEffect(() => {
    if (!reset) { setReset(true) }
  }, [reset])

  const [reverse, setReverse] = useState(false)

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
      config={config.slow}
      from={from}
      to={to}
      reset={reset}
      onRest={() => {
        setReset(true)
        setReverse(!reverse)
      }}
    >
      {style => {
        return (
          <animated.svg
            className={className}
            height={size}
            width={size}
            role='img'
            viewBox='0 0 32 32'
            style={{ transform: style.transform }}
          >
            <animated.circle
              role='presentation'
              cx={16}
              cy={16}
              r={radius}
              stroke={color}
              fill='none'
              strokeWidth={thickness}
              strokeDasharray={style.strokeDasharray}
              strokeLinecap='round'
            />
          </animated.svg>
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
  size: 20,
  color: carbon,
  thickness: 4,
  gap: 0.9,
  speed: 1200,
  friction: 15,
  tension: 100
}

export default Loader
