import React from 'react'
import { cx } from 'emotion'
import { base, danger, info, warning, title as titleStyle } from './style'
import match from 'pattycake'
import PropTypes from 'prop-types'

const Message = props => {
  const { children, kind, title } = props

  const kindStyle = match(kind)(
    'danger', () => danger,
    'info', () => info,
    'warning', () => warning,
    undefined, () => ''
  )

  return (
    <div className={cx(base(props), kindStyle)}>
      <div>
        {title && (
          <div className={titleStyle}>
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

Message.propTypes = {
  kind: PropTypes.oneOf(['info', 'warning', 'danger']),
  title: PropTypes.string,
  outline: PropTypes.bool
}

Message.defaultProps = {
  title: '',
  outline: false
}

export default Message
