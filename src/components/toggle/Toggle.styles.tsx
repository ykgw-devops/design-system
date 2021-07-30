import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { concrete, clearSky } from '../../Colors'

export const Checkbox = styled.input`
  z-index: -1;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  outline: 0;
`

const CheckedLabel = (tiny = false) => css`
  &:before {
    background: ${clearSky};
  }

  &:after {
    ${tiny ? 'left: 1rem' : 'left: 1.5rem'};
  }
`

const TinyToggle = css`
  width: 2rem;
  min-height: 1rem;

  &:before {
    width: 2rem;
    height: 1rem;
  }

  &:after {
    left: 1rem;
    width: 1rem;
    height: 1rem;
  }

  &:before, &:after {
    left: 0;
  }
`

interface ILabelProps {
  checked: boolean;
  size: 'regular' | 'tiny';
}

export const Label = styled.label<ILabelProps>`
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
  ${props => props.size === 'tiny' && TinyToggle}
  ${props => props.checked && CheckedLabel(props.size === 'tiny')}
`

export const ToggleWrapper = styled.div`
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
  z-index: 0;
`
