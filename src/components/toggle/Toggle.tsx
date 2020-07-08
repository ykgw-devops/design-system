import React, { forwardRef, useState, ChangeEvent } from 'react'
import { omit } from 'lodash'

import { ToggleWrapper, Label, Checkbox } from './Toggle.styles'

interface IToggleProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * This Toggle component can be both controlled and uncontrolled
 *
 * When the 'checked' property is set we assume the component is controlled and don't use local state.
 *
 * Use the 'defaultChecked' property to set initial checked state for uncontrolled components
 */
const Toggle = forwardRef((props: IToggleProps, ref: React.Ref<any>) => {
  const [checked, setChecked] = useState(props.defaultChecked || false)

  const handleChange = (event) => {
    if (!('checked' in props)) {
      setChecked(checked => !checked)
    }

    if (typeof props.onChange === 'function') {
      props.onChange(event)
    }
  }

  const isChecked = props.checked || checked

  return (
    <ToggleWrapper role='switch' aria-checked={isChecked}>
      <Label checked={isChecked}>
        <Checkbox
          type='checkbox'
          onChange={handleChange}
          checked={isChecked}
          {...omit(props, 'defaultChecked')}
          ref={ref}
        />
      </Label>
    </ToggleWrapper>
  )
})

export default Toggle
