/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { clearSky } from '../../Colors'
import { rotation } from './Loader.styles'

const Loader = (props) => {
  const { size, color, duration, thickness, className, gap } = props

  const radius = (size / 2) - (thickness / 2)
  const circumference = Math.PI * (2 * radius)

  const strokeDasharray = `${gap * circumference}, ${circumference}`

  return (
    <svg
      className={className}
      height={size}
      width={size}
      role='img'
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        css={css`
          animation: ${rotation} ${duration}ms linear infinite;
          transform-origin: 50% 50%;
        `}
        role='presentation'
        cx='50%'
        cy='50%'
        r={radius}
        stroke={color}
        fill='none'
        strokeWidth={thickness}
        strokeDasharray={strokeDasharray}
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
  size: 32,
  color: clearSky,
  thickness: 3,
  gap: 0.6,
  duration: 600
}

export default Loader
