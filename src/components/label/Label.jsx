
import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon/Icon'
import { base, close, colored, detail, focused, value, size } from './Label.styles.jsx'
import withProps from 'recompose/withProps'

// Icon with larger hitbox and cursor pointer
const Close = withProps({ name: 'close' })(Icon)

const Label = (props) => (
  <div css={[base(props), colored(props), focused(props), size(props)]} className={props.className}>
    {props.name &&
      <div css={detail(props)}>
        {props.name}
      </div>}
    <div css={value(props)}>
      {props.children}
      {props.removable && <Close css={close(props)} onClick={props.onClose} />}
    </div>
  </div>
)

Label.propTypes = {
  color: PropTypes.oneOf(['red', 'blue', 'orange', 'green', 'default']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  outline: PropTypes.bool,
  removable: PropTypes.bool,
  focused: PropTypes.bool,
  onClose: PropTypes.func
}

Label.defaultProps = {
  color: 'default',
  size: 'medium',
  outline: false,
  removable: false,
  focused: false,
  onClose: () => {}
}

export default Label
