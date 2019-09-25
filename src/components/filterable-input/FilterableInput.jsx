import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import searchString from 'search-string'

import { Popup } from '../popup/Popup'

const TightPopup = styled(Popup)`
  padding: 0;
`

const FilterableInput = ({ initialValue = '', onChange, input, popup }) => {
  const inputElem = useRef(null)
  const [tooptip, setTooltip] = useState(null)
  const [filter, setFilter] = useState(initialValue)

  const onTooltipCreated = (popup) => {
    setTooltip(popup)
  }

  const onChangeHandler = (value) => {
    setFilter(value)
    if (typeof onChange === 'function') {
      onChange(value)
    }
  }

  const addFilter = (value) => {
    const search = searchString.parse(filter)
    search.addEntry(value, true)

    onChangeHandler(search.toString())

    inputElem.current.focus()
    tooptip.hide()
  }

  const updateInput = (value) => {
    inputElem.current.blur()
    tooptip.hide()
    onChangeHandler(value)
  }

  const popupContent = popup({
    addFilter,
    setFilter: updateInput,
    resetFilter: v => updateInput('')
  })

  const inputElement = input({
    ref: inputElem,
    value: filter,
    onChange: e => onChangeHandler(e.target.value)
  })

  return (
    <TightPopup a11y={false} trigger='focus' triggerTarget={inputElem.current} onCreate={onTooltipCreated} content={popupContent}>
      {inputElement}
    </TightPopup>
  )
}

export default FilterableInput
