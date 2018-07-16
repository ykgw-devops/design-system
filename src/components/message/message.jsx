import React from 'react'
import { cx } from 'emotion'
import { base, danger, info, warning } from './style'
import match from 'pattycake'
import PropTypes from 'prop-types'

const Message = props => {
  const { children, kind = '' } = props

  const kindStyle = match(kind)(
    'danger', () => danger,
    'info', () => info,
    'warning', () => warning,
    undefined, () => ''
  )

  return (
    <div className={cx(base(props), kindStyle)}>
      {children}
    </div>
  )
}

Message.propTypes = {
  kind: PropTypes.oneOf(['info', 'warning', 'danger']),
  outline: PropTypes.bool
}

Message.defaultProps = {
  kind: 'none',
  outline: false
}

export default Message
