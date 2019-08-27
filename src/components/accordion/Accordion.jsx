/** @jsx jsx */
import React, { Component } from 'react'
import { jsx } from '@emotion/core'
import { setDisplayName } from 'recompose'
import PropTypes from 'prop-types'
import { map, isEmpty, get, omit } from 'lodash'

import Icon from '../icon/Icon'
import { base, size, kind, title as titleStyle, content } from './Accordion.styles'
import withProps from 'recompose/withProps'

const Close = withProps({ name: 'close' })(Icon)

class Accordion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: []
    }
  }

  static getDerivedStateFromProps (props, state) {
    return { ...state, items: props.items }
  }

  handleDelete (index, event) {
    const { onDelete } = this.props
    const { items } = this.state
    const indexExists = get(items, index)
    if (!indexExists) return

    onDelete(index, items[index])
    // stop the event from bubbling up and opening the summary
    event.stopPropagation()
  }

  handleClick (index, closed) {
    const { onClick, exclusive } = this.props
    const { items } = this.state

    const newItems = map(items, (item, itemIndex) => {
      const isClickedItem = itemIndex === index
      if (exclusive) return isClickedItem ? { ...item, active: closed } : item
      if (isClickedItem && closed) return { ...item, active: true }
      return omit(item, ['active'])
    })

    this.setState({ items: newItems })
    onClick(index, newItems)
  }

  render () {
    const { items } = this.state
    const { children, removable } = this.props

    return (
      <div css={getStyle(this.props)}>
        {isEmpty(items)
          ? React.Children.map(children, child => ({ ...child, props: { ...child.props, removable } }))
          : map(items, (item, index) => (<AccordionItem key={index} {...item} index={index} removable={removable} onDelete={this.handleDelete.bind(this)} onClick={this.handleClick.bind(this)} />))
        }
      </div>
    )
  }
}

const AccordionItem = ({ removable, onDelete, title, children, active, index, onClick }) => {
  const handleOpen = (index, event) => {
    event.preventDefault()

    const closed = !active
    onClick(index, closed)
  }

  return (
    <details open={active} index={index}>
      <summary onClick={e => handleOpen(index, e)}>
        <div css={titleStyle}>
          {title}
        </div>
        {removable && <Close onClick={(event) => onDelete(index, event)} />}
      </summary>
      <div css={content}>
        {children}
      </div>
    </details>
  )
}

Accordion.Item = setDisplayName('Accordion.Item')(AccordionItem)

const getStyle = props => {
  return [
    base,
    size(props),
    kind(props)
  ]
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  index: PropTypes.number,
  onDelete: PropTypes.func,
  onClick: PropTypes.func
}

AccordionItem.defaultProps = {
  title: 'Default title',
  active: false,
  index: 0,
  onDelete: () => { },
  onClick: () => { }
}

Accordion.propTypes = {
  kind: PropTypes.oneOf(['none', 'styled']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  removable: PropTypes.bool,
  exclusive: PropTypes.bool,
  items: PropTypes.array,
  onDelete: PropTypes.func,
  onClick: PropTypes.func
}

Accordion.defaultProps = {
  kind: 'none',
  size: 'medium',
  removable: false,
  exclusive: false,
  items: [],
  onDelete: () => { },
  onClick: () => { }
}

export default Accordion
