import React, { useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import searchString from 'search-string'

import { Popup } from '../popup/Popup'
import { isModifierKey } from '../../utils/keyboard'

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
const ENTER_KEY = 'Enter'

const TightPopup = styled(Popup)`
  padding: 0;
`

const FilterableInput = ({ initialValue = '', value, onChange, onSelection, input, popup, hideOnEnter = true }) => {
  const inputElem = useRef(null)
  const tooltipRef = useRef(null)
  const [filter, setFilter] = useState(initialValue || value)

  useEffect(() => {
    setFilter(initialValue)
  }, [initialValue])

  const onTooltipCreated = (tooltip: any) => {
    tooltipRef.current = tooltip
  }

  const onChangeHandler = (value: string) => {
    setFilter(value)
    if (typeof onChange === 'function') {
      onChange(value)
    }
  }

  const onSelectionHandler = (value: string) => {
    if (typeof onSelection === 'function') {
      onSelection(value)
    }
  }

  const addFilter = (value: string) => {
    const search = searchString.parse(filter)
    search.addEntry(value, true)

    setFilter(value)

    inputElem.current.focus()

    tooltipRef.current.hide()
  }

  const updateInput = (value: string) => {
    inputElem.current.blur()
    tooltipRef.current.hide()

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
    // keypress event is not fired for modifier keys
    onKeyDown: e => {
      if (e.key === ENTER_KEY && hideOnEnter) {
        tooltipRef.current.hide()
      } else if (isModifierKey(e.key)) {

      } else {
        tooltipRef.current.show()
      }
    },
    onChange: e => onChangeHandler(e.target.value)
  })

  return (
    <TightPopup hideOnClick onCreate={onTooltipCreated} content={popupContent}>
      {inputElement}
    </TightPopup>
  )
}

export default FilterableInput
