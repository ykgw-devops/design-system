import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import Pagination from './Pagination'

test('small basic pagination', () => {
  const onIndexChanged = jest.fn()

  render(
    <Pagination count={3} onIndexChanged={onIndexChanged} />
  )

  const prevBtn = screen.getByRole('button', { name: 'previous' })
  expect(prevBtn).toHaveAttribute('aria-disabled', 'true')

  const nextBtn = screen.getByRole('button', { name: 'next' })
  expect(nextBtn).toHaveAttribute('aria-disabled', 'false')

  const firstItem = screen.getByRole('button', { name: '1' })
  const secondItem = screen.getByRole('button', { name: '2' })
  const thirdItem = screen.getByRole('button', { name: '3' })

  expect(firstItem).toBeInTheDocument()
  expect(firstItem).toHaveAttribute('aria-current', 'page')
  expect(secondItem).toBeInTheDocument()
  expect(thirdItem).toBeInTheDocument()

  // click next button
  fireEvent.click(nextBtn)
  expect(onIndexChanged).toHaveBeenCalledWith(1)
  expect(prevBtn).toHaveAttribute('aria-disabled', 'false')
  expect(nextBtn).toHaveAttribute('aria-disabled', 'false')
  expect(secondItem).toHaveAttribute('aria-current', 'page')

  // click previous button
  fireEvent.click(prevBtn)
  expect(onIndexChanged).toHaveBeenCalledWith(0)
  expect(firstItem).toHaveAttribute('aria-current', 'page')
  expect(prevBtn).toHaveAttribute('aria-disabled', 'true')

  // click last button
  fireEvent.click(thirdItem)
  expect(thirdItem).toHaveAttribute('aria-current', 'page')
  expect(nextBtn).toHaveAttribute('aria-disabled', 'true')
})

test('large pagination with ellipsis', () => {
  render(
    <Pagination count={10} />
  )

  const ellipsedButton = screen.getByRole('button', { name: '…' })

  expect(ellipsedButton).toBeInTheDocument()
  expect(ellipsedButton).toHaveAttribute('aria-disabled', 'true')
})

test('large pagination with middle section', () => {
  render(
    <Pagination initialIndex={50} count={100} />
  )

  const ellipsisButtons = screen.getAllByRole('button', { name: '…' })
  expect(ellipsisButtons).toHaveLength(2)
})

test('large pagination with tail section', () => {
  render(
    <Pagination initialIndex={99} count={100} />
  )

  expect(screen.getByRole('button', { name: '…' })).toBeInTheDocument()
})

test('relative pagination', () => {
  render(
    <Pagination relative initialIndex={0} count={3} />
  )

  expect(screen.getByText('Page 1')).toBeInTheDocument()

  // click next button
  const nextBtn = screen.getByRole('button', { name: 'next' })
  fireEvent.click(nextBtn)

  expect(screen.getByText('Page 2')).toBeInTheDocument()
})
