/** @jsx jsx */
import { jsx } from '@emotion/core'  // eslint-disable-line

import Select from 'react-select'
import { defaultProps, withProps } from 'recompose'

import { ClearIndicator, MultiValueRemove } from './Select.common'
import styles from './Select.styles'

const CustomSelect = withProps({
  components: {
    ClearIndicator,
    MultiValueRemove
  }
})(Select)

export default defaultProps({ styles })(CustomSelect)
