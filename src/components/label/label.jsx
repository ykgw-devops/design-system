/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon/icon'
import { base, close, colored, detail, focused, value } from './label.styles.jsx'
import withProps from 'recompose/withProps'

// Icon with larger hitbox and cursor pointer
const Close = withProps({ name: 'close' })(Icon)

const Label = (props) => (
  <div css={[base(props), colored(props), focused(props)]}>
    {props.name &&
      <div css={detail(props)}>
        {props.name}
      </div>
    }
    <div css={value}>
      {props.children}
      {props.removable && <Close css={close(props)} onClick={props.onClose} />}
    </div>
  </div>
)

Label.propTypes = {
  color: PropTypes.oneOf(['red', 'blue', 'orange', 'green', 'default']),
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
