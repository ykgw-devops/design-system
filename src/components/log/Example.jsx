import React, { useEffect, useState } from 'react'
import Log from './Log'
import Label from '../label/Label'
import { takeRight } from 'lodash'

const Example = () => {
  const [lines, setLines] = useState([])

  function createLine () {
    return (
      <>
        <Label size='tiny' color='green' outline>{new Date().toISOString()}</Label>{'\t'}
        <Label size='tiny' color='orange' outline>WARN</Label>{'\t'}
        {Date.now()}
      </>
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = createLine()
      const newArray = takeRight(lines.concat(newValue), 25)
      setLines(newArray)
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [lines])

  return (
    <Log lines={lines} />
  )
}

export default Example
