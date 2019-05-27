/** @jsx jsx */
import { jsx } from '@emotion/core'
import { card, title, hex } from './card.styles.jsx'
import Segment from '../segment/segment'

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
