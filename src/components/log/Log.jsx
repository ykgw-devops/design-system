import { FixedSizeList as VirtualList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Line = css`
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

const Log = ({ lines = [], lineRenderer }) => {
  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          width={width}
          height={height}
          itemCount={lines.length}
          itemSize={21}
        >
          {({ index, style }) => lineRenderer({ index, style, css: Line }, lines[index])}
        </List>
      )}
    </AutoSizer>
  )
}

export default Log
