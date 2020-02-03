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

  const ToggleBody = useCallback((props) => (
    <div {...props} style={{ height: isOpen ? 'auto' : 0, overflow: 'hidden' }}>
      {props.children}
    </div>
  ), [isOpen])

  return props.children({
    toggle,
    open,
    close,
    isOpen,
    ToggleBody
  })
}

export default Collapsible
