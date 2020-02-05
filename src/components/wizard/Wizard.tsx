import React, { useState, useCallback } from 'react'

const Collapsible = ({ children = [] }) => {
  const [step, setStep] = useState(0)
  const totalSteps = children.length

  const next = () => {
    const nextStep = step + 1
    return (nextStep > totalSteps) ? setStep(nextStep) : setStep(step)
  }
  const previous = () => {
    const prevStep = step - 1
    return (prevStep > totalSteps) ? setStep(prevStep) : setStep(step)
  }

  return children.map((child) => {
    const { props } = child
    return { ...child, props: { ...props, style: { color: 'red' } } }
  })
}

export default Collapsible
