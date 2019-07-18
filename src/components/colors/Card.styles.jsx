import { css } from '@emotion/core'
import { carbon } from '../../Colors.jsx'

const card = css`
  display: inline-block;
  height: 250px;
  margin: 5px;
  position: relative;
  width: 200px;
`

const base = css`
  background: white;
  color: ${carbon};
  left: 0;
  padding: 10px;
  position: absolute;
  text-align: center;
  width: 100%;
`

const title = color => css`
  ${base};
  top: 0;
`

const hex = css`
  ${base};
  bottom: 0;
`

export {
  card,
  title,
  hex
}
