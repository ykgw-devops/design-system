import React, { Component } from 'react'
import update from 'immutability-helper'
import { flatMap, get, includes, reject, upperFirst } from 'lodash'

import Icon from '../icon/icon'
import Input from '../input/input'
import Label from '../label/label'

const KEY_BACKSPACE = 8

class FilterableInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filters: [].concat(props.initialFilters),
      inputLength: 0
    }
  }

  onKeyDownHandler (event) {
    const { keyCode } = event
    const { filters, inputLength } = this.state

    const isBackspace = keyCode === KEY_BACKSPACE
    const hasFilters = filters.length > 0
    const hasText = inputLength > 0
    const shouldInteractWithFilter = isBackspace && hasFilters && !hasText

    const focusedFilter = get(filters, `${filters.length - 1}.focused`)

    if (shouldInteractWithFilter && focusedFilter) {
      this.removeLastFilter()
    }

    if (shouldInteractWithFilter && !focusedFilter) {
      this.focusLastFilter()
    }
  }

  onChangeHandler (event) {
    const { target } = event
    this.blurLastFilter()
    this.setState({ inputLength: target.value.length })
    this.props.onChange(event)
  }

  addFilter (key, value) {
    const newFilters = update(this.state.filters, { $push: [{ key, value }] })
    this.setState({ filters: newFilters })
  }

  removeLastFilter () {
    this.state.filters.pop()
    this.setState({ filters: this.state.filters })
  }

  focusLastFilter () {
    this.setFocusLastFilter(true)
  }

  blurLastFilter () {
    this.setFocusLastFilter(false)
  }

  setFocusLastFilter (focused = false) {
    const { filters } = this.state
    if (filters.length === 0) return

    const lastIndex = filters.length - 1

    const newFilters = update(filters, {
      [lastIndex]: { $merge: { focused } }
    })

    this.setState({ filters: newFilters })
  }

  removeFilter (key, value) {
    const { filters } = this.state
    const newFilters = reject(filters, { key, value })
    this.setState({ filters: newFilters })
  }

  render () {
    const { name } = this.props
    const { filters } = this.state
    const initialAdornments = [{
      position: 'left',
      content: <Icon name='filter_list' />
    }]

    const adornments = initialAdornments.concat(
      filters.map(f => this.toAdornment(f))
    )
    return (
      <Input
        name={name}
        placeholder='Filter…'
        adornments={adornments}
        {...this.props}
        onChange={e => this.onChangeHandler(e)}
        onKeyDown={e => this.onKeyDownHandler(e)}
      />
    )
  }

  // transform a { key: value } filter to an adornment
  toAdornment ({ key, value, focused }) {
    const labelKey = `${key}:${value}`
    const closeFn = (event) => this.removeFilter(key, value)

    return {
      position: 'left',
      content: (
        <Label onClose={closeFn} focused={focused} key={labelKey} name={upperFirst(key)} removable>
          {upperFirst(value)}
        </Label>
      )
    }
  }
}

FilterableInput.defaultProps = {
  initialFilters: []
}

export default FilterableInput