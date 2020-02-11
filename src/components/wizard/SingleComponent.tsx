import React, { useEffect } from 'react'
import Segment from '../segment/Segment'
import Button from '../button/Button'

const SingleComponent = ({ wizard, children }) => {
  const { setSteps, currentStep, totalSteps, isFirst, isLast, previous, next } = wizard
  useEffect(() => {
    setSteps(children)
  }, [])

  return (
    <Segment.Group>
      <Segment.Header>
        Step {currentStep + 1} of {totalSteps}
      </Segment.Header>
      <Segment>
        {
          children.map((child, index) => {
            return {
              ...child,
              props: {
                ...child.props,
                key: index,
                style: {
                  display: index === currentStep ? 'block' : 'none'
                }
              }
            }
          })
        }
      </Segment>
      <Segment.Footer>
        <Button disabled={isFirst} kind='success' onClick={() => previous()}>
          Previous
        </Button>
        <Button disabled={isLast} kind='success' onClick={() => next()}>
          Next
        </Button>
      </Segment.Footer>
    </Segment.Group>
  )
}

export default SingleComponent