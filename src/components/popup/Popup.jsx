import styled from '@emotion/styled'
import { triangle } from 'polished'
import { concrete, ink } from '../../Colors'
import { Manager, Reference, Popper } from 'react-popper'

const Popup = styled.div`
  background: white;
  color: ${ink};
  padding: 0.5em 1em;
  border: solid 1px ${concrete};
  border-radius: 4px;
  box-shadow: 0 7px 12px 0 rgba(149,149,149,0.20);
`

const Arrow = styled.div`
  ${triangle({
    pointingDirection: 'bottom',
    width: '15px',
    height: '10px',
    foregroundColor: 'white'
  })};
`

const Example = () => (
  <Manager>
    <Reference>
      {({ ref }) => (
        <button type='button' ref={ref}>
          Reference element
        </button>
      )}
    </Reference>
    <Popper placement='top' modifiers={{ arrow: { enabled: false } }}>
      {({ ref, style, placement, arrowProps }) => (
        <div ref={ref} style={style} data-placement={placement}>
          <Popup>
            This is the popper element
          </Popup>
        </div>
      )}
    </Popper>
  </Manager>
)

export default Example
