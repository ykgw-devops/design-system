import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import Button from '../button/Button'

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`

const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const PreviewImage = styled(MainImage)`
  height: 50%;
`

const PreviewWizard = ({ images, wizard }) => {
  const { setSteps, currentStep, isFirst, isLast, next, previous, steps, currentIndex, totalSteps, goTo } = wizard

  useEffect(() => {
    setSteps(images)
  }, [])

  // early return so we don't notice loading state
  if (!currentStep) return
  const endIndex = totalSteps - 1
  const prevImage = isFirst ? steps[endIndex] : steps[currentIndex - 1]
  const nextImage = isLast ? steps[0] : steps[currentIndex + 1]

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <ImageContainer>
          <PreviewImage src={prevImage} />
        </ImageContainer>
        <ImageContainer>
          <MainImage src={currentStep} />
        </ImageContainer>
        <ImageContainer>
          <PreviewImage src={nextImage} />
        </ImageContainer>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button kind='success' onClick={() => isFirst ? goTo(endIndex) : previous()}>
          Previous
        </Button>
        <Button kind='success' onClick={() => isLast ? goTo(0) : next()} style={{ marginLeft: '5px'}}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default PreviewWizard