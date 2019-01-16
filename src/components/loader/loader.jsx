import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { carbon } from '../../colors'
import { animated, Spring } from 'react-spring'

const from = {
  transform: 'rotate(0deg)'
}

const to = {
  transform: 'rotate(360deg)'
}

const Loader = (props) => {
  const { size, color, thickness, gap, className, friction, tension } = props

  const [reset, setReset] = useState(false)
  useEffect(() => {
    if (!reset) { setReset(true) }
  }, [reset])

  return (
    <Spring
      native
      config={{ friction, tension }}
      from={from}
      to={to}
      reset={reset}
      onRest={() => setReset(true)}
    >
      {style => {
        return (
          <animated.svg
            className={className}
            height={size}
            width={size}
            role='img'
            viewBox='0 0 32 32'
            style={style}
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
  gap: 2,
  speed: 1200,
  friction: 10,
  tension: 70
}

export default Loader
