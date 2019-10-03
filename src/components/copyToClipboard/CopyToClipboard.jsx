import React, { useEffect, useState, useRef } from 'react'
import Clipboard from 'clipboard'
import { Tooltip } from '../popup/Popup'
import Icon from '../icon/Icon'

const CopyToClipboard = ({ value, trigger }) => {
  const triggerRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let timerRef
    const clipboard = new Clipboard(triggerRef.current, {
      text: () => value
    })
      .on('success', onSuccess)

    function onSuccess () {
      setCopied(true)

      timerRef = setTimeout(() => {
        setCopied(false)
      }, 800)
    }

    // destroy clipboard on unmount
    return () => {
      clearTimeout(timerRef)
      clipboard.destroy()
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
