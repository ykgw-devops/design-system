import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import Icon from './Icon'

test('icon', () => {
  render(
    <Icon name='star' />
  )

  const icon = screen.getByRole('img', { name: 'star' })
  expect(icon).toBeInTheDocument()
})
