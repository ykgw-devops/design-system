import React from 'react'
import { base, danger, info, warning, title as titleStyle } from './Messages.styles.jsx'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

const kindMap = {
  danger: danger,
  info: info,
  warning: warning,
  [undefined]: ''
}

const Message = props => {
  const { children, kind, title } = props
  const kindStyle = kindMap[kind]

  // since "outline" is already defined as a boolean prop
  const rest = omit(props, 'outline')

  return (
    <div css={[base(props), kindStyle]} {...rest}>
      <div>
        {title && (
          <div css={titleStyle}>
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
