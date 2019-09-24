import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { isNil } from 'lodash'
import colors, { concrete } from '../../Colors'

const firstItem = css`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: none;
`

const lastItem = css`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: none;
`

const Segment = styled.div`
  font-size: 1rem;
  background: white;
  border: 1px solid ${concrete};
  box-shadow: rgba(37, 11, 54, 0.04) 0px 2px 0px;
  border-radius: 0.333333rem;

  padding: ${props => isNil(props.padding) ? '1em' : props.padding};

  > p {
    margin: 0;
    margin-bottom: 1em;
  }

  > p:last-of-type {
    margin-bottom: 0;
  }
`

const Header = styled(Segment)`
  background: ${colors.withWeight(concrete, 200)};
  padding: 0.65em 1em;

  white-space: pre;
  display: flex;
  align-items: center;
`

const Footer = styled(Segment)`
  ${lastItem};
  padding: 0.5em;
`

const Group = styled.div`
  font-size: 1rem;
  background: #FFFFFF;
  box-shadow: rgba(37, 11, 54, 0.04) 0px 2px 0px;
  border-radius: 0.333333rem;

  > div {
    border-radius: 0;
    box-shadow: none;
  }

  > div:first-of-type {
    ${firstItem};
  }

  > div:last-of-type {
    ${lastItem};
  }

  /* allow multiple headers in a segment group */
  ${Segment} + ${Header} {
    border-top: none;
  }
`

Segment.Header = Header
Segment.Footer = Footer
Segment.Group = Group

export default Segment
