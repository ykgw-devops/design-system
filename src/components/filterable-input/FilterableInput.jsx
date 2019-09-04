/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react'
import update from 'immutability-helper'
import { debounce, flatMap, includes, get, omit, reject, upperFirst } from 'lodash'
import styled from '@emotion/styled'

import Icon from '../icon/Icon'
import Input from '../input/Input'
import Label from '../label/Label'

const KEY_BACKSPACE = 8

const SmallerLabel = styled(Label)`
  font-size: 0.7em;
`

class FilterableInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filters: [].concat(props.initialFilters),
      input: ''
    }

    // debounced onChange handler
    this.onChangeHandler = debounce(() => {
      props.onChange(this.state.input)
    }, 300)

    /**
     * You cannot add the same filter key twice, so we're filtering the available
     * filters when we create the component
     */
    const availableFilters = this.getAvailableFilters()
    this.state = Object.assign(this.state, {
      availableFilters: [].concat(availableFilters)
    })
  }

  /**
   * The actual available filters for dropdown are:
   * props.availableFilters - props.initialFilters - state.filters
   */
  getAvailableFilters () {
    const { props, state } = this

    const stateFilterKeys = flatMap(state.filters, 'key')
    const availableFilters = reject(props.availableFilters, filter => {
      return includes(stateFilterKeys, filter.key)
    })

    return availableFilters
  }

  onKeyDownHandler (event) {
    const { keyCode } = event
    const { filters, input } = this.state

    const isBackspace = keyCode === KEY_BACKSPACE
    const hasFilters = filters.length > 0
    const hasText = input.length > 0
    const shouldInteractWithFilter = isBackspace && hasFilters && !hasText

    const focusedFilter = get(filters, `${filters.length - 1}.focused`)

    if (shouldInteractWithFilter && focusedFilter) {
      this.removeLastFilter()
    }

    if (shouldInteractWithFilter && !focusedFilter) {
      this.focusLastFilter()
    }
  }

  _onChangeHandler (event) {
    const { target } = event
    this.blurLastFilter()
    this.setState({ input: target.value })
    this.onChangeHandler()
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

    const rest = omit(this.props, ['initialFilters', 'availableFilters'])

    return (
      <Input
        name={name}
        placeholder='Filter…'
        adornments={adornments}
        {...rest}
        onChange={e => this._onChangeHandler(e)}
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
        <SmallerLabel onClose={closeFn} focused={focused} key={labelKey} name={upperFirst(key)} removable>
          {upperFirst(value)}
        </SmallerLabel>
      )
    }
  }
}

FilterableInput.defaultProps = {
  initialFilters: []
}

export default FilterableInput
