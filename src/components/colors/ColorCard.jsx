/** @jsx jsx */
import { jsx } from '@emotion/core'
import { card, title, hex } from './Card.styles.jsx'
import Segment from '../segment/Segment'

export default ({ name, color }) => (
  <Segment css={card} style={{ backgroundColor: color }}>
    <div css={title(name)}>
      {name}
    </div>
    <div css={hex}>
      {color}
    </div>
  </Segment>
)
