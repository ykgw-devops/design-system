import { useState, useMemo } from 'react'
import { castArray } from 'lodash'

const Wizard = ({ children = [] }) => {
  const [steps, setSteps] = useState([])
  const [currentStep, setCurrentStep] = useState(0)
  const stepsEndIndex = steps.length - 1

  const next = () => {
    const nextStep = currentStep + 1

    if (nextStep > stepsEndIndex) return

    setCurrentStep(nextStep)
  }

  const previous = () => {
    const prevStep = currentStep - 1

    if (stepsEndIndex < 0) return

    setCurrentStep(prevStep)
  }

  const wizard = {
    currentStep,
    setSteps,
    next,
    previous
  }

  return useMemo(() => {
    return castArray(children).map(child => ({ ...child, props: { ...child.props, wizard }}))
  }, [currentStep])
}

export default Wizard
