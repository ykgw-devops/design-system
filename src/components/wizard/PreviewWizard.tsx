import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import Button from '../button/Button'
import Icon from '../icon/Icon'

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

const PreviewWizard = ({ currentStep, isFirst, isLast, next, previous, steps, currentIndex, totalSteps, goTo }) => {
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
        <Button kind='success' pill onClick={() => isFirst ? goTo(endIndex) : previous()}>
          <Icon name='navigate_before' />
          </Button>
        <Button kind='success' pill onClick={() => isLast ? goTo(0) : next()} style={{ marginLeft: '5px'}}>
          <Icon name='navigate_next' />
        </Button>
      </div>
    </div>
  )
}

export default PreviewWizard
