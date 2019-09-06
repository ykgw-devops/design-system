/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { filter, map } from 'lodash'

import { base, input, fluidStyle, leftAdornments as leftStyle, rightAdornments as rightStyle } from './Input.styles'

const Input = ({ adornments = [], fluid = false, ...rest }) => {
  const leftAdornments = filter(adornments, { position: 'left' })
  const rightAdornments = filter(adornments, { position: 'right' })

  return (
    <div css={[base, fluid && fluidStyle]}>
      {getAdornments(leftAdornments, leftStyle)}
      <input {...rest} css={input} />
      {getAdornments(rightAdornments, rightStyle)}
    </div>
  )
}

const getAdornments = (adornments, style) => {
  if (adornments.length <= 0) return
  const mappedAdornments = map(adornments, ({ content }, index) => <div key={index}>{content}</div>)

  return <span css={style}>{mappedAdornments}</span>
}

Input.propTypes = {
  onChange: PropTypes.func,
  adornments: PropTypes.array,
  fluid: PropTypes.bool
}

Input.defaultProps = {
  onChange: () => undefined,
  adornments: [],
  fluid: false
}

export default Input
