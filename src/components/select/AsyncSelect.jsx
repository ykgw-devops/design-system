/** @jsx jsx */
import { jsx } from '@emotion/core'

import AsyncSelect from 'react-select/async'
import { defaultProps, withProps } from 'recompose'

import { ClearIndicator, MultiValueRemove } from './Select.common'
import styles from './Select.styles'

const CustomAsyncSelect = withProps({
  components: {
    ClearIndicator,
    MultiValueRemove
  }
})(AsyncSelect)

export default defaultProps({ styles })(CustomAsyncSelect)
