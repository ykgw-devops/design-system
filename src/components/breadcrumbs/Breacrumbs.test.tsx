import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'

import Breadcrumbs from './Breadcrumbs'

test('basic breadcrumbs', () => {
  const sections = [
    { key: 'foo', content: 'foo' },
    { key: 'bar', content: 'bar' }
  ]

  render(
    <Breadcrumbs sections={sections} />
  )

  expect(screen.getByRole('navigation')).toBeInTheDocument()
})

test('breadcrumbs with JSX content', () => {
  const sections = [
    { key: 'foo', content: (<a href="/">Home</a>) },
    { key: 'bar', content: 'bar' }
  ]

  render(
    <Breadcrumbs sections={sections} />
  )

  expect(screen.getByRole('navigation')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
})
