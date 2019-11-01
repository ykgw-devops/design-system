/** @jsx jsx */
import { jsx } from '@emotion/core'
import { card, colorStrip } from './Card.styles'
import Segment from '../segment/Segment'
import colors from '../../Colors'

export default ({ name, color }) => {
  return (
    <Segment.Group css={card}>
      <Segment.Header>{name}</Segment.Header>
      <Segment css={colorStrip(color, 100)}>
        100 · {colors.withWeight(color, 100)}
      </Segment>
      <Segment css={colorStrip(color, 200)}>
        200 · {colors.withWeight(color, 200)}
      </Segment>
      <Segment css={colorStrip(color, 300)}>
        300 · {colors.withWeight(color, 300)}
      </Segment>
      <Segment css={colorStrip(color, 400)}>
        400 · {colors.withWeight(color, 400)}
      </Segment>
      <Segment css={colorStrip(color, 500)}>
        500 · {colors.withWeight(color, 500)}
      </Segment>
      <Segment css={colorStrip(color, 600)}>
        600 · {colors.withWeight(color, 600)}
      </Segment>
      <Segment css={colorStrip(color, 700)}>
        700 · {colors.withWeight(color, 700)}
      </Segment>
      <Segment css={colorStrip(color, 800)}>
        800 · {colors.withWeight(color, 800)}
      </Segment>
      <Segment css={colorStrip(color, 900)}>
        900 · {colors.withWeight(color, 900)}
      </Segment>
    </Segment.Group>
  )
}
