import { useEffect } from 'react'
import { castArray } from 'lodash'

const Steps = ({ children = [], wizard }) => {
  const { setSteps, currentStep } = wizard

  useEffect(() => {
    setSteps(castArray(children))
  }, [])

  return currentStep
}

export default Steps
