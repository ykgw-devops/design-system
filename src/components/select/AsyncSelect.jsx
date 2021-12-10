/** @jsx jsx */
import { jsx } from '@emotion/core' // eslint-disable-line

import RSAsyncSelect from 'react-select/async'
import RSAsyncCreatable from 'react-select/async-creatable'
import { defaultProps, withProps } from 'recompose'

import { ClearIndicator, MultiValueRemove } from './Select.common'
import styles from './Select.styles'

const components = {
  ClearIndicator,
  MultiValueRemove
}

const WaylayAsyncSelect = defaultProps({ styles })(
  withProps({ components })(RSAsyncSelect)
)

const WaylayAsyncCreatable = withProps({
  components
})(RSAsyncCreatable)

WaylayAsyncSelect.Creatable = WaylayAsyncCreatable

export default WaylayAsyncSelect
