import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon/icon'
import { base, close, colored, detail, focused, value } from './style'
import { cx } from '../../emotion'
import  { withProps } from 'recompose'

// Icon with larger hitbox and cursor pointer
const Close = withProps({ name: 'close' })(Icon)

const Label = (props) => (
  <div className={cx(base(props), colored(props), focused(props), props.className)}>
    {props.name &&
      <div className={detail(props)}>
        {props.name}
      </div>
    }
    <div className={value}>
      {props.children}
      {props.removable && <Close className={close(props)} onClick={props.onClose} />}
    </div>
  </div>
)

Label.propTypes = {
  color: PropTypes.oneOf(['red', 'blue', 'orange', 'default']),
  outline: PropTypes.bool,
  removable: PropTypes.bool,
  focused: PropTypes.bool,
  onClose: PropTypes.func
}

Label.defaultProps = {
  color: 'default',
  outline: false,
  removable: false,
  focused: false,
  onClose: () => {}
}

export default Label
