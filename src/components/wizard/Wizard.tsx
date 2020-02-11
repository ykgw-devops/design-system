import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { castArray } from 'lodash'
import Steps from './Steps'
import Navigation from './Navigation'

const Wizard = ({ children = [] }) => {
  const [steps, setSteps] = useState([])
  const [currentStep, setCurrentStep] = useState((<></>))
  const [currentIndex, setCurrentIndex] = useState(0)

  const stepsEndIndex = useMemo(() => steps.length - 1, [steps])

  useEffect(() => {
    goTo(0)
  }, [steps])

  const next = () => {
    const newIndex = currentIndex + 1
    const newStep = steps[newIndex]

    if (!newStep) return

    setCurrentStep(newStep)
    setCurrentIndex(newIndex)
  }

  const previous = () => {
    const newIndex = currentIndex - 1
    const newStep = steps[newIndex]

    if (!newStep) return

    setCurrentStep(newStep)
    setCurrentIndex(newIndex)
  }

  const goTo = (newIndex) => {
    const newStep = steps[newIndex]

    if (!newStep) return

    setCurrentStep(newStep)
    setCurrentIndex(newIndex)
  }

  const wizard = {
    currentStep,
    currentIndex,
    goTo,
    steps,
    totalSteps: steps.length,
    setSteps,
    next,
    previous,
    isLast: currentIndex === stepsEndIndex,
    isFirst: currentIndex === 0
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
