/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { setDisplayName } from 'recompose'
import PropTypes from 'prop-types'
import { map, isEmpty, get, reject, omit } from 'lodash'

import Icon from '../icon/Icon'
import { base, size, kind, title as titleStyle, content } from './Accordion.styles'
import withProps from 'recompose/withProps'

const Close = withProps({ name: 'close' })(Icon)

const Accordion = ({ removable, items: accordionItems, onDelete, onClick, exclusive, children, ...rest }) => {
  const [items, setItems] = useState(accordionItems || [])

  const handleDelete = index => {
    const indexExists = get(items, index)
    if(!indexExists) return
    const newItems = reject(items, (item, itemIndex) => itemIndex === index)
    setItems(newItems)
    onDelete(index, newItems)
  }

  const handleClick = (index, closed) => {
    const newItems = map(items, (item, itemIndex) => {
      const isClickedItem = itemIndex === index
      if (exclusive) return isClickedItem ? { ...item, active: closed } : item
      if (isClickedItem && closed) return { ...item, active: true }
      return omit(item, ['active'])
    })

    setItems(newItems)
    onClick(index, newItems)
  }

  return (
    <div css={getStyle(rest)}>
      {isEmpty(items)
        ? React.Children.map(children, child => ({ ...child, props: { ...child.props, removable } }))
        : map(items, (item, index) => (<AccordionItem key={index} {...item} index={index} removable={removable} onDelete={handleDelete} onClick={handleClick} />))
      }
    </div>
  )
}

const AccordionItem = ({ removable, onDelete, title, children, active, index, onClick }) => {
  const handleOpen = index => {
    const closed = !active
    onClick(index, closed)
  }

  return (
    <details open={active} index={index} onClick={e => e.preventDefault()}>
      <summary>
        <div css={titleStyle} onClick={() => handleOpen(index)}>
          {title}
        </div>
        {removable && <Close onClick={() => onDelete(index)} />}
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
