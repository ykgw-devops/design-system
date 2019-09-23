import { css } from '@emotion/core'
import colors, { concrete, carbon, clearSky } from '../../Colors'

export const input = css`
  -webkit-appearance: none;
  background: none;
  border: none;
  color: ${carbon};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    box-shadow: none;
    border-color: ${colors.withWeight(clearSky, 300)};
    outline: none;
  }

  &::placeholder {
    color: ${colors.withWeight(carbon, 400)};
    font-weight: 300;
  }

  /*
    backwards compatibility with the previous basic styles
   */
  border-bottom: solid 1px ${concrete};
  line-height: 1.5em;
  margin: 0.25em 0;
`

export const fluid = css`
  width: 100%;
`

export const adornments = props => css`
  display: inline-block;
  padding-left: 0.7em;
  padding-right: 0.7em;
  line-height: 2.4rem;

  background: ${colors.withWeight(concrete, 200)};
  border: solid 1px ${colors.withWeight(concrete, 500)};

  ${props => props.left && (
    'border-right: 0;'
  )};

  ${props => props.right && (
    'border-left: 0;'
  )};
`

export const basic = css`

`
