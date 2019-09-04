/** @jsx jsx */
import { jsx } from '@emotion/core'
import { base } from './Segment.styles.jsx'

const Segment = props => {
  return (
    <div {...props} css={[base]}>
      {props.children}
    </div>
  )
}

export default Segment
