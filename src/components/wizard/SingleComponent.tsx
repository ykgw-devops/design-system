import React, { useEffect } from 'react'
import Segment from '../segment/Segment'
import Button from '../button/Button'

const SingleComponent = ({ wizard, children }) => {
  const { currentIndex, currentStep, setSteps, totalSteps, next, previous, isFirst, isLast } = wizard

  useEffect(() => {
    setSteps(children)
  }, [])

  return (
    <Segment.Group>
      <Segment.Header>
        Step {currentIndex + 1} of {totalSteps}
      </Segment.Header>
      <Segment>
        { currentStep }
      </Segment>
      <Segment.Footer>
        <Button disabled={isFirst} kind='warning' onClick={() => previous()}>
          Previous
        </Button>
        <Button disabled={isLast} kind='warning' onClick={() => next()} style={{ marginLeft: '5px'}}>
          Next
        </Button>
      </Segment.Footer>
    </Segment.Group>
  )
}

export default SingleComponent