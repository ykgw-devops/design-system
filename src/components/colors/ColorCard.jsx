/** @jsx jsx */
import { jsx } from '@emotion/core'
import { card, colorStrip } from './Card.styles.jsx'
import Segment from '../segment/Segment'

export default ({ name, color }) => {
  return (
    <Segment.Group css={card}>
      <Segment.Header>{name}</Segment.Header>
      <Segment css={colorStrip(color, 100)}>
        100
      </Segment>
      <Segment css={colorStrip(color, 200)}>
        200
      </Segment>
      <Segment css={colorStrip(color, 300)}>
        300
      </Segment>
      <Segment css={colorStrip(color, 400)}>
        400
      </Segment>
      <Segment css={colorStrip(color, 500)}>
        500
      </Segment>
      <Segment css={colorStrip(color, 600)}>
        600
      </Segment>
      <Segment css={colorStrip(color, 700)}>
        700
      </Segment>
      <Segment css={colorStrip(color, 800)}>
        800
      </Segment>
      <Segment css={colorStrip(color, 900)}>
        900
      </Segment>
    </Segment.Group>
  )
}
