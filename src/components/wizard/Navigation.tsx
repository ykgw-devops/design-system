import React, { useEffect } from 'react'
import Button from '../button/Button'

const Navigation = ({ wizard }) => {
  const { previous, next, isLast, isFirst } = wizard

  return (
    <div>
      <Button disabled={isFirst} onClick={previous}>Previous</Button>
      <Button disabled={isLast} style={{ marginLeft: '5px'}} onClick={next}>Next</Button>
    </div>
  )
}

export default Navigation
