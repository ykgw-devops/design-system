import React from 'react'
import Select, { components } from 'react-select'
import { defaultProps, withProps } from 'recompose'

import Icon from '../icon/Icon'
import colors, { carbon, clearSky, concrete } from '../../Colors'

const ClearIndicator = props => {
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

const MultiValueRemove = props => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name='clear' style={{ fontSize: '0.8em' }} />
    </components.MultiValueRemove>
  )
}

const CustomSelect = withProps({
  components: {
    ClearIndicator,
    MultiValueRemove
  }
})(Select)

export default defaultProps({
  styles: {
    singleValue: (base, state) => ({
      ...base,
      color: carbon
    }),
    multiValue: (base, state) => ({
      ...base,
      color: carbon,
      height: '1.5em',
      lineHeight: '1em'
    }),
    multiValueRemove: (base) => ({
      ...base,
      ':hover': {
        background: colors.withWeight(concrete, 600)
      }
    }),
    indicatorsContainer: (base) => ({
      ...base,
      height: '2.4rem'
    }),
    control: (base, state) => ({
      ...base,
      height: '2.4rem',
      minHeight: 'auto',
      borderWidth: '1px',
      boxShadow: 'none',
      borderColor: state.isFocused
        ? colors.withWeight(clearSky, 300)
        : concrete,
      ':hover': {
        borderColor: state.isFocused
          ? colors.withWeight(clearSky, 300)
          : concrete
      }
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: colors.withWeight(carbon, 400),
      fontWeight: 300
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected
        ? clearSky
        : provided.background
    })
  }
})(CustomSelect)
