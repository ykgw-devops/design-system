import { useState, useEffect } from 'react'
import { castArray, get } from 'lodash'

const Steps = ({ children = [], wizard }) => {
  const { setSteps, currentStep } = wizard

  useEffect(() => {
    setSteps(children)
  }, [])

  return castArray(children).map((child, index) => {
    const currentStyle = get(child, ['props', 'style'], {})

    const newStyle = {
      ...currentStyle,
      display: index === currentStep ? 'block' : 'none'
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

export default Steps
