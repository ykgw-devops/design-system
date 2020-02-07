/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'

import { base, close, colored, detail, focused, value, size } from './Label.styles.jsx'
import withProps from 'recompose/withProps'

// Icon with larger hitbox and cursor pointer
const Close = withProps({
  children: '⛌'
})(styled.div``)

const Container = styled('div', {
  shouldForwardProp: isPropValid
})`
  ${props => base(props)};
  ${props => colored(props)};
  ${props => focused(props)};
  ${props => size(props)};
`

const Label = (props) => {
  const { name, children, removable, onClose, ...rest } = props

  return (
    <Container {...rest}>
      {name &&
        <div css={detail(props)}>
          {name}
        </div>}
      <div css={value(props)}>
        {children}
        {removable && <Close css={close(props)} onClick={onClose} />}
      </div>
    </Container>
  )
}

Label.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  outline: PropTypes.bool,
  removable: PropTypes.bool,
  focused: PropTypes.bool,
  onClose: PropTypes.func
}

Label.defaultProps = {
  color: '',
  size: 'medium',
  outline: false,
  removable: false,
  focused: false,
  onClose: () => {}
}

export default Label
