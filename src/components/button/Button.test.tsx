import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import serializer from 'jest-emotion'

import Button from './Button'

expect.addSnapshotSerializer(serializer)

test('button DOM', () => {
  const { asFragment } = render(
    <Button>Hello, World!</Button>
  )

  expect(asFragment()).toMatchSnapshot()
})

test('regular button', () => {
  render(
    <Button>Hello, World!</Button>
  )

  expect(screen.getByRole('button')).toHaveTextContent('Hello, World!')
  expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
})

test('button with kind', () => {
  render(
    <Button kind='secondary'>Hello, World!</Button>
  )

  expect(screen.getByRole('button')).toBeInTheDocument()
})


test('disabled button', () => {
  render(
    <Button disabled>Hello, World!</Button>
  )
  expect(screen.getByRole('button')).toBeDisabled()
})

test('click button', () => {
  const onClick = jest.fn()

  render(
    <Button onClick={onClick}>Hello, World!</Button>
  )

  fireEvent.click(screen.getByRole('button'))
  expect(onClick).toHaveBeenCalledTimes(1)
})
