import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import serializer from 'jest-emotion'

import Input from '../input/Input'
import Button from '../button/Button'
import Form from './Form'

expect.addSnapshotSerializer(serializer)

test('button spacing in group', () => {
  const { asFragment } = render(
    <Form>
      <Input.Group>
        <Button>Hello, World!</Button>
      </Input.Group>
    </Form>
  )

  expect(asFragment()).toMatchSnapshot()
})
