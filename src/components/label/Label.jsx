/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { base, close, colored, detail, focused, value, size } from './Label.styles.jsx'
import withProps from 'recompose/withProps'

// Icon with larger hitbox and cursor pointer
const Close = withProps({
  children: '⛌'
})(styled.div``)

const Container = styled.div`
  ${props => base(props)};
  ${props => colored(props)};
  ${props => focused(props)};
  ${props => size(props)};
`

const Label = (props) => (
  <Container {...props}>
    {props.name &&
      <div css={detail(props)}>
        {props.name}
      </div>}
    <div css={value(props)}>
      {props.children}
      {props.removable && <Close css={close(props)} onClick={props.onClose} />}
    </div>
  </Container>
)

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
