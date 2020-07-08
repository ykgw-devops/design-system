import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import Toggle from './Toggle'

test('basic uncontrolled toggle', () => {
  render(<Toggle />)

  const toggle = screen.getByRole('switch')
  // I'm not sure why clicking the top level component works in the browser but not with
  // fireEvent.click so we have to select the actual checkbox
  const checkbox = screen.getByRole('checkbox')
  expect(toggle).not.toBeChecked()

  fireEvent.click(checkbox)
  expect(toggle).toBeChecked()
})

test('onChange handler', () => {
  const handleChange = jest.fn()

  render(<Toggle onChange={e => handleChange(e.target.checked)} />)

  const checkbox = screen.getByRole('checkbox')
  fireEvent.click(checkbox)

  expect(handleChange).toHaveBeenCalledWith(true)
})

test('default checked toggle', () => {
  render(<Toggle defaultChecked />)

  const toggle = screen.getByRole('switch')
  expect(toggle).toBeChecked()
})

test('controlled toggle', () => {
  const { rerender } = render(<Toggle checked={true} />)

  const toggle = screen.getByRole('switch')
  expect(toggle).toBeChecked()

  rerender(<Toggle checked={false} />)
  expect(toggle).not.toBeChecked()
})
