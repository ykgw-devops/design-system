import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render } from '@testing-library/react'

import Collapsible from './Collapsible'

test('basic collapsible', () => {
  render(
    <Collapsible>
      {(props) => (
        <>
          <button aria-expanded={props.isOpen} onClick={props.toggle}>toggle</button>
          <div style={props.style}>
            Hello, world!
          </div>
        </>
      )}
    </Collapsible>
  )

  const btn = screen.getByRole('button', { name: 'toggle' })
  expect(btn).toHaveAttribute('aria-expanded', 'false')

  fireEvent.click(btn)
  expect(btn).toHaveAttribute('aria-expanded', 'true')
})
