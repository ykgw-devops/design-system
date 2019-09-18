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
  background: white;
  border: 1px solid ${concrete};
  box-shadow: rgba(37, 11, 54, 0.04) 0px 2px 0px;
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

const Header = styled(Segment)`
  ${firstItem};
  background: ${colors.withWeight(concrete, 200)};
`

const Footer = styled(Segment)`
  ${lastItem};
  padding: 0.5em;
`

const Group = styled.div`
  background: #FFFFFF;
  box-shadow: rgba(37, 11, 54, 0.04) 0px 2px 0px;
  border-radius: 4px;

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
`

Segment.Header = Header
Segment.Footer = Footer
Segment.Group = Group

export default Segment
