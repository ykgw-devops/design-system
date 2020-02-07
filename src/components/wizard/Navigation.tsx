import React, { useEffect } from 'react'
import Button from '../button/Button'

const Navigation = ({ wizard }) => {
  const { previous, next, endIndex, currentStep } = wizard

  return (
    <div>
      <Button disabled={currentStep === 0} onClick={previous}>Previous</Button>
      <Button disabled={currentStep === endIndex} style={{ marginLeft: '5px'}} onClick={next}>Next</Button>
    </div>
  )
}

export default Navigation
