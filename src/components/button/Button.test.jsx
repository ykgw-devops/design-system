import Button from './Button'
import { render, fireEvent } from '@testing-library/react'
import serializer from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

expect.addSnapshotSerializer(serializer)

test('button DOM', () => {
  const { asFragment } = render(
    <Button>Hello, World!</Button>
  )

  expect(asFragment()).toMatchSnapshot()
})

test('regular button', () => {
  const { getByRole } = render(
    <Button>Hello, World!</Button>
  )

  expect(getByRole('button')).toHaveTextContent('Hello, World!')
  expect(getByRole('button')).toHaveAttribute('type', 'button')
})

test('disabled button', () => {
  const { getByRole } = render(<Button disabled>Hello, World!</Button>)
  expect(getByRole('button')).toHaveAttribute('disabled')
})

test('click button', () => {
  const onClick = jest.fn()

  const { getByRole } = render(
    <Button onClick={onClick}>Hello, World!</Button>
  )

  fireEvent.click(getByRole('button'))

  expect(onClick).toHaveBeenCalledTimes(1)
})
