import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import searchString from 'search-string'

import { Popup } from '../popup/Popup'

const TightPopup = styled(Popup)`
  padding: 0;
`

const FilterableInput = (props) => {
  const inputElem = useRef(null)
  const [filterTooltip, setFilterTooltip] = useState(null)

  const onTooltipCreated = (popup) => {
    setFilterTooltip(popup)
  }

  const [filter, setFilter] = useState('')

  const onChange = (value) => {
    setFilter(value)
    typeof props.onChange === 'function' && props.onChange(value)
  }

  const onChangeHandler = e => onChange(e.target.value)

  const addFilter = (value) => {
    const search = searchString.parse(filter)
    search.addEntry(value, true)

    onChange(search.toString())

    inputElem.current.focus()
    filterTooltip.hide()
  }

  const updateFilter = (value) => {
    onChange(value)
    inputElem.current.blur()
    filterTooltip.hide()
  }

  const popupContent = props.popup({
    addFilter,
    setFilter: updateFilter,
    resetFilter: v => updateFilter('')
  })
  const inputElement = props.input({
    ref: inputElem,
    value: filter,
    onChange: onChangeHandler
  })

  return (
    <TightPopup onCreate={onTooltipCreated} content={popupContent}>
      {inputElement}
    </TightPopup>
  )
}

FilterableInput.defaultProps = {
  initialFilters: []
}

export default FilterableInput
