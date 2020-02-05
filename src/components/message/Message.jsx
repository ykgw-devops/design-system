import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { base, danger, info, warning, title as titleStyle, basic, withIcon } from './Messages.styles.jsx'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

const kindMap = {
  danger: danger,
  info: info,
  warning: warning,
  [undefined]: ''
}

const MessageContainer = styled('div', {
  shouldForwardProp: isPropValid
})``

const Message = props => {
  const { children, kind, title } = props
  const kindStyle = kindMap[kind]

  // since "outline" is already defined as a boolean prop
  const rest = omit(props, 'outline')

  const styles = [
    base(props),
    kindStyle,
    props.basic && basic,
    props.icon && withIcon(props.icon)
  ]

  return (
    <MessageContainer css={styles} {...rest}>
      <div>
        {title && (
          <div css={titleStyle}>
            {title}
          </div>
        )}
        {children}
      </div>
    </MessageContainer>
  )
}

Message.propTypes = {
  kind: PropTypes.oneOf(['info', 'warning', 'danger']),
  title: PropTypes.string,
  icon: PropTypes.string,
  outline: PropTypes.bool,
  basic: PropTypes.bool
}

Message.defaultProps = {
  title: '',
  outline: false
}

export default Message
