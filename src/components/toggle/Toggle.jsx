import React, { forwardRef, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { concrete, clearSky } from '../../Colors'

const Checkbox = styled.input`
  z-index: -1;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  outline: 0;
`

const CheckedLabel = css`
  &:before {
    background: ${clearSky};
  }

  &:after {
    left: 1.5rem;
  }
`

const Label = styled.label`
  position: relative;
  display: block;
  width: 3rem;

  cursor: auto;

  font-size: 1rem;
  line-height: 1rem;
  font-style: normal;

  min-height: 1.5rem;

  outline: 0;
  z-index: 1;

  &:before {
    display: block;
    position: absolute;
    content: '';
    z-index: 1;
    transform: none;
    border: none;
    top: 0;
    background: ${concrete};
    box-shadow: none;
    width: 3rem;
    height: 1.5rem;
    border-radius: 5em;
  }

  &:after {
    background: #fff;
    position: absolute;
    content: '';
    opacity: 1;
    z-index: 2;
    border: none;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15), 0 0 0 1px rgba(0,0,0,.15) inset;
    width: 1.5rem;
    height: 1.5rem;
    top: 0;
    left: 0;
    border-radius: 5em;
    transition: background .15s ease, left .15s ease;
  }

  &:before, &:after {
    left: 0;
  }

  ${props => props.checked && CheckedLabel}
`

const ToggleWrapper = styled.div`
  display: inline-block;
  position: relative;

  font-size: 1rem;
  font-style: normal;

  line-height: 1rem;
  min-height: 1rem;
  min-width: 1rem;

  outline: 0;
  vertical-align: baseline;
  backface-visibility: hidden;
`

/**
 * This Toggle component can be both controlled and uncontrolled
 *
 * When the 'checked' property is set we assume the component is controlled and don't use local state.
 *
 * Use the 'defaultChecked' property to set initial checked state for uncontrolled components
 */
const Toggle = forwardRef((props, ref) => {
  const [checked, setChecked] = useState(props.defaultChecked || false)

  const handleChange = (event) => {
    if (!('checked' in props)) {
      setChecked(checked => !checked)
    }

    typeof props.onChange === 'function' && props.onChange(event)
  }

  const isChecked = props.checked || checked

  return (
    <ToggleWrapper>
      <Label checked={isChecked}>
        <Checkbox type='checkbox' {...props} onChange={handleChange} checked={isChecked} ref={ref} />
      </Label>
    </ToggleWrapper>
  )
})

export default Toggle
