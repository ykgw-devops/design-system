/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { concrete } from '../../Colors'

/**
 * Timeline
 *  - Header
 *  - Entry[]
 *    - Title
 *    - Description
 */

const Timeline = styled.div``

const Header = styled.div``

const Entry = (props) => (
  <EntryRow>
    <EntryContent>
      {props.children}
    </EntryContent>
  </EntryRow>
)

const EntryRow = styled.div`
  display: flex;
  align-items: center;
`

const EntryContent = styled.div`
  border-left: solid 1px ${concrete};
  padding: 0.5em 1em;
  margin-left: 1em;
  position: relative;

  &:before {
    position: absolute;
    z-index: 10;
    display: block;
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    content: ' ';
    background-color: ${concrete};
    border: 2px solid white;
    border-radius: 6px;
    left: -0.5em;
    top: 1.5em;
  }
`

const Title = styled.div``
const Description = styled.div`
  margin-top: 0.5em;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: solid 1px ${concrete};
`

const EntryGroup = styled.div`
  margin: 0.5em 0;
`

Timeline.Header = Header
Timeline.EntryGroup = EntryGroup
Timeline.Entry = Entry
Timeline.Title = Title
Timeline.Description = Description

export default Timeline
