import { useState, useMemo, useCallback } from 'react'
import { castArray } from 'lodash'
import Steps from './Steps'
import Navigation from './Navigation'

const Wizard = ({ children = [] }) => {
  const [steps, setSteps] = useState([])
  const [currentStep, setCurrentStep] = useState(0)

  const stepsEndIndex = useMemo(() => steps.length - 1, [steps])

  const next = useCallback(() => {
    const nextStep = currentStep + 1

    if (nextStep > stepsEndIndex) return

    setCurrentStep(nextStep)
  }, [stepsEndIndex, currentStep])

  const previous = useCallback(() => {
    const prevStep = currentStep - 1

    if (prevStep < 0) return

    setCurrentStep(prevStep)
  }, [stepsEndIndex, currentStep])

  const wizard = {
    currentStep,
    setSteps,
    next,
    previous,
    endIndex: stepsEndIndex
  }

  return castArray(children).map((child) => {
    const { props } = child
    const { children } = props

    if (typeof children === 'function') return children(wizard)

    const newProps = { ...props, wizard }

    return ({ ...child, props: newProps })
  })
}

Wizard.Steps = Steps
Wizard.Navigation = Navigation

export default Wizard
