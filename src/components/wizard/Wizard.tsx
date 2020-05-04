import { useState, useMemo } from 'react'
import { castArray, clamp } from 'lodash'
import Steps from './Steps'
import Navigation from './Navigation'

interface IWizardProps {
  children: React.ReactElement[] | Function
  steps: any[]
}

const Wizard = ({ children = [], steps = [] }: IWizardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const stepsEndIndex = useMemo(() => steps.length - 1, [steps])

  const outOfBounds = (index: number) => clamp(index, 0, steps.length - 1)

  const goTo = (newIndex: number) => {
    setCurrentIndex(outOfBounds(newIndex))
  }

  const next = () => {
    goTo(currentIndex + 1)
  }

  const previous = () => {
    goTo(currentIndex - 1)
  }

  const wizard = {
    currentStep: steps[currentIndex],
    currentIndex,
    goTo,
    steps,
    totalSteps: steps.length,
    next,
    previous,
    isLast: currentIndex === stepsEndIndex,
    isFirst: currentIndex === 0
  }

  if (typeof children === 'function') {
    return children(wizard)
  }

  return castArray(children).map((child, index) => {
    const { props } = child
    const newProps = { ...props, wizard }

    return ({ ...child, key: child.key || index, props: newProps })
  })
}

Wizard.Steps = Steps
Wizard.Navigation = Navigation

export default Wizard
