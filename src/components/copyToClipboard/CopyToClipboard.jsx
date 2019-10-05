import React, { useEffect, useState, useRef } from 'react'
import copy from 'copy-text-to-clipboard'
import { Tooltip } from '../popup/Popup'
import Icon from '../icon/Icon'

const CopyToClipboard = ({ value, trigger }) => {
  const triggerRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let timerRef

    triggerRef.current.addEventListener('click', doCopy)

    function onSuccess () {
      setCopied(true)

      timerRef = setTimeout(() => {
        setCopied(false)
      }, 800)
    }

    function doCopy () {
      copy(value)
      onSuccess()
    }

    // remove event listeners and timers
    return () => {
      triggerRef.current.removeEventListener('click', doCopy)
      clearTimeout(timerRef)
    }
  }, [])

  return (
    <Tooltip
      placement='top'
      trigger='manual'
      visible={copied}
      content={
        <>
          <Icon name='check' /> Copied to clipboard
        </>
      }
    >
      {trigger(triggerRef)}
    </Tooltip>
  )
}

export default CopyToClipboard
