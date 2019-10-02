import Tippy from '@tippy.js/react'
import styled from '@emotion/styled'
import { withProps } from 'recompose'

const ContentPopupStyle = styled(Tippy)`
  background: none;
  color: inherit;
  text-align: left;

  padding: 0;
`

const TooltipStyle = styled(Tippy)`
  padding: 0.6rem 0.75rem;
`

const Popup = withProps(props => ({
  arrow: false,
  distance: 2,
  trigger: 'click',
  placement: 'bottom-start',
  animateFill: false,
  interactive: true,
  duration: [0, 0]
}))(ContentPopupStyle)

const Tooltip = withProps(props => ({
  arrow: true
}))(TooltipStyle)

export {
  Popup,
  Tooltip
}