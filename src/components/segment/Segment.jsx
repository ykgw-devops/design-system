import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { tint } from 'polished'
import { isNil } from 'lodash'

import { concrete } from '../../Colors'

const Segment = styled.section`
  background: #FFFFFF;
  border: 1px solid ${concrete};
  box-shadow: 0 7px 12px 0 rgba(149,149,149,0.20);
  border-radius: 4px;

  padding: ${props => isNil(props.padding) ? '1em' : props.padding};

  > p {
    margin: 0;
    margin-bottom: 1em;
  }

  > p:last-of-type {
    margin-bottom: 0;
  }
`

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

const Group = styled.div`
  background: #FFFFFF;
  box-shadow: 0 7px 12px 0 rgba(149,149,149,0.20);
  border-radius: 4px;

  > ${Segment} {
    border-radius: 0;
    box-shadow: none;
  }

  > ${Segment}:first-of-type {
    ${firstItem};
  }

  > ${Segment}:last-of-type {
    ${lastItem};
  }
`

const Header = styled(Segment)`
  ${firstItem};
  background: ${tint(0.6, concrete)};
`

const Footer = styled(Segment)`
  ${lastItem};
  padding: 0.5em;
`

Segment.Header = Header
Segment.Footer = Footer
Segment.Group = Group

export default Segment
