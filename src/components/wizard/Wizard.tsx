import React, { useState } from 'react'
import styled from '@emotion/styled'
import { get } from 'lodash'

import Button from '../button/Button'
import Icon from '../icon/Icon'

const Controls = styled.div`
  display: flex;
`

const Control = styled(Button)`
  margin-left: 5px;
`

const Wizard = ({ children = [] }) => {
  const [step, setStep] = useState(0)
  const endIndex = children.length - 1

  const next = () => {
    const nextStep = step + 1

    if (nextStep > endIndex) return

    setStep(nextStep)
  }

  const previous = () => {
    const prevStep = step - 1

    if (prevStep < 0) return

    setStep(prevStep)
  }

  return (
    <div>
      {
        children.map((child, index) => {
          const currentStyle = get(child, ['props', 'style'], {})
          const newStyle = {
            ...currentStyle,
            display: index === step ? 'block' : 'none'
          }
          const newProps = {
            ...child.props,
            style: newStyle
          }
          return {
            ...child,
            props: newProps
          }
        })
      }
      <Controls>
        <Control disabled={step === 0} onClick={previous} >
          <Icon name='navigate_before' /> Prev
        </Control>
        <Control disabled={step === endIndex} onClick={next} >
          <Icon name='navigate_next' /> Next
        </Control>
      </Controls>
    </div>
  )
}

export default Wizard
