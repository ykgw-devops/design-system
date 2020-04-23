/** @jsx jsx */
import { jsx } from '@emotion/core'  // eslint-disable-line
import colors, { carbon, clearSky, concrete } from '../../Colors'

export default {
  singleValue: (base, state) => ({
    ...base,
    color: 'carbon'
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
