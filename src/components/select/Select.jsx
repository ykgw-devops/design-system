import Select from 'react-select'
import { defaultProps } from 'recompose'

import colors, { carbon, clearSky, concrete } from '../../Colors'

export default defaultProps({
  styles: {
    singleValue: (provided, state) => ({
      ...provided,
      color: carbon
    }),
    control: (provided, state) => ({
      ...provided,
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
})(Select)
