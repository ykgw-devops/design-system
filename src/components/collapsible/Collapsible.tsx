import { useState, CSSProperties, ReactElement } from 'react'

interface IRenderProps {
  toggle: () => void;
  open: () => void;
  close: () => void;
  isOpen: boolean;
  style: CSSProperties;
}

interface ICollapsibleProps {
  open?: boolean
  children: (props: IRenderProps) => ReactElement
}

const Collapsible = (props: ICollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(props.open)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((open: boolean) => !open)

  const style: CSSProperties = {
    height: isOpen ? 'auto' : 0,
    overflow: 'hidden'
  }

  const renderProps: IRenderProps = {
    toggle,
    open,
    close,
    isOpen,
    style
  }

  return props.children(renderProps)
}

Collapsible.defaultProps = {
  open: false
}

export default Collapsible
