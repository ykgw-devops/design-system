import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import Button from './Button'

test('Button.Group', () => {
  render(
    <Button.Group>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Button.Group>
  )

  const buttons = screen.getAllByRole('button')

  expect(buttons).toHaveLength(3)
  expect(buttons[0]).toHaveTextContent('1')
  expect(buttons[1]).toHaveTextContent('2')
  expect(buttons[2]).toHaveTextContent('3')
})
