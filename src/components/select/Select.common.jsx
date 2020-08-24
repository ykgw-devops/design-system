/** @jsx jsx */
import { jsx } from '@emotion/core'  // eslint-disable-line
import { components } from 'react-select'

import Icon from '../icon/Icon'

export const ClearIndicator = props => {
  const { getStyles, innerProps: { ref, ...restInnerProps } } = props

  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
    >
      <Icon style={{ fontWeight: 'bold' }} name='clear' />
    </div>
  )
}

export const MultiValueRemove = props => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name='clear' style={{ fontSize: '0.8em' }} />
    </components.MultiValueRemove>
  )
}

export const Option = props => <components.Option {...props} />
