import { useRef } from 'react'
import { FixedSizeList as VirtualList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import styled from '@emotion/styled'

const Line = styled.div`
  font-family: monospace;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  vertical-align: middle;
  line-height: 21px;
`

const List = styled(VirtualList)`
  background: #282C35;
  color: white;
`

const Log = ({ lines = [] }) => {
  const Row = ({ index, style }) => (
    <Line style={style}>
      {lines[index]}
    </Line>
  )

  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          width={width}
          height={height}
          itemCount={lines.length}
          itemSize={21}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  )
}

export default Log
