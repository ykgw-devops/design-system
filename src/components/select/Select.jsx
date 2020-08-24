/** @jsx jsx */
import { jsx } from '@emotion/core'  // eslint-disable-line

import Select from 'react-select'
import { defaultProps, withProps } from 'recompose'

import { ClearIndicator, MultiValueRemove, Option } from './Select.common'
import styles from './Select.styles'

const CustomSelect = withProps(props => ({
  components: {
    ClearIndicator,
    MultiValueRemove,
    Option,
    ...props.components
  }
}))(Select)

export default defaultProps({ styles })(CustomSelect)
