import React from 'react'
import styled from '@emotion/styled'

import { clearSky, concrete } from '../../Colors'

interface IProgressBar {
  color: string
  percentage: number // 0 - 100
  width?: string
  height?: string
}

const ProgressInner = styled.div<{ height: string }>`
  background: ${clearSky};
  position: absolute;
  height: ${({ height }) => height};
  border-radius: ${({ height }) => height};

  transition: width 300ms;

  top: 0;
  left: 0;
`

interface IProgressWrapper { width: string, height: string }

const ProgressWrapper = styled.div<IProgressWrapper>`
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ height }) => height};
  background: ${concrete};

  position: relative;
`

const ProgressBar = (props: IProgressBar) => {
  const {
    percentage = 0,
    color = clearSky,
    width = '100%',
    height = '7px'
  } = props

  return (
    <ProgressWrapper width={width} height={height}>
      <ProgressInner style={{ width: percentage + '%', background: color }} height={height} />
    </ProgressWrapper>
  )
}

export default ProgressBar
