import React from 'react'
import { css } from '../../emotion'

const style = css`
  margin: 10px 0;
`

const Field = (props) => (
  <div className={style}>
    {props.children}
  </div>
)

export default Field
