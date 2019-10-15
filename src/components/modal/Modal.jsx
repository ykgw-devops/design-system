/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, css, ClassNames, Global } from '@emotion/core'
import styled from '@emotion/styled'
import ReactModal from 'react-modal'
import Segment from '../segment/Segment'

const StyledModal = styled(ReactModal)`
  max-width: 70%;

  position: absolute;
  top: 5%;
  margin-bottom: 3rem;

  &:focus {
    outline: none;
  }
`

const PortalStyle = css`
  position: absolute;
  z-index: 9999;
`

const OverlayStyle = css`
  position: fixed;
  overflow-y: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: rgba(0, 0, 0, 0.65);
`

const scrollLock = css`
  body.ReactModal__Body--open {
    overflow-y: hidden;
  }
`

const Wrapper = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <React.Fragment>
      {props.children({ handleOpen, handleClose, isOpen })}
    </React.Fragment>
  )
}

const Modal = ({ handleOpen, handleClose, isOpen, trigger, children, ...rest }) => {
  return (
    <React.Fragment>
      <Global styles={scrollLock} />
      {trigger}
      <ClassNames>
        {({ css }) => (
          <StyledModal
            shouldCloseOnOverlayClick
            shouldCloseOnEsc
            onRequestClose={handleClose}
            portalClassName={css(PortalStyle)}
            overlayClassName={css(OverlayStyle)}
            isOpen={isOpen}
            ariaHideApp={false}
            {...rest}
          >
            {children}
          </StyledModal>
        )}
      </ClassNames>
    </React.Fragment>
  )
}

const Actions = styled(Segment.Footer)`
  display: flex;
  justify-content: flex-end;

  button + button {
    margin-left: 5px;
  }
`

Modal.Wrapper = Wrapper
Modal.Actions = Actions

export default Modal
