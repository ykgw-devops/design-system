import React, { useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import searchString from 'search-string'

import { Popup } from '../popup/Popup'

const TightPopup = styled(Popup)`
  padding: 0;
`

const FilterableInput = ({ initialValue = '', value, onChange, onSelection, input, popup }) => {
  const inputElem = useRef(null)
  const [tooptip, setTooltip] = useState(null)
  const [filter, setFilter] = useState(initialValue || value)

  useEffect(() => {
    setFilter(initialValue)
  }, [initialValue])

  const onTooltipCreated = (popup) => {
    setTooltip(popup)
  }

  const onChangeHandler = (value) => {
    setFilter(value)
    if (typeof onChange === 'function') {
      onChange(value)
    }
  }

  const onSelectionHandler = (value) => {
    if (typeof onSelection === 'function') {
      onSelection(value)
    }
  }

  const addFilter = (value) => {
    const search = searchString.parse(filter)
    search.addEntry(value, true)

    setFilter(value)

    inputElem.current.focus()

    tooptip.hide()
  }

  const updateInput = (value) => {
    inputElem.current.blur()
    tooptip.hide()

    setFilter(value)
    onSelectionHandler(value)
  }

  const popupContent = popup({
    addFilter,
    setFilter: updateInput,
    resetFilter: () => updateInput('')
  })

  const inputElement = input({
    ref: inputElem,
    value: filter,
    onChange: e => onChangeHandler(e.target.value)
  })

  return (
    <TightPopup a11y={false} onCreate={onTooltipCreated} content={popupContent}>
      {inputElement}
    </TightPopup>
  )
}

export default FilterableInput
