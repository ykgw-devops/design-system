import styled from '@emotion/styled'
import Tippy from '@tippy.js/react'
import { withProps } from 'recompose'
import { concrete } from '../../Colors'

const ContentPopupStyle = styled(Tippy)`
  background: none;
  color: inherit;

  padding: 0.75rem 1rem;
  background: #FFFFFF;
  border: 1px solid ${concrete};
  box-shadow: 0 7px 12px 0 rgba(149,149,149,0.20);
  border-radius: 0.333333rem;
  text-align: left;
  font-size: 1rem;
`

const TooltipStyle = styled(Tippy)`
  padding: 0.6rem 0.75rem;
`

export const Popup = withProps(props => ({
  arrow: false,
  distance: 2,
  trigger: 'click',
  placement: 'bottom-start',
  animateFill: false,
  interactive: true,
  duration: [0, 0]
}))(ContentPopupStyle)

export const Tooltip = withProps(props => ({
  arrow: true
}))(TooltipStyle)
