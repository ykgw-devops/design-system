import React, { useState, useCallback } from 'react'

interface ICollapsibleProps {
  open: boolean
  children: Function
}

const Collapsible = (props: ICollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(props.open)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((open: boolean) => !open)

  const style = { height: isOpen ? 'auto' : 0, overflow: 'hidden' }

  return props.children({
    toggle,
    open,
    close,
    isOpen,
    style
  })
}

export default Collapsible
