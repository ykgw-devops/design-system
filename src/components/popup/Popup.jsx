import Tippy from '@tippyjs/react'
import styled from '@emotion/styled'
import { compose, defaultProps, mapProps } from 'recompose'
import { roundArrow } from 'tippy.js'

import base from './tippy.styles'

const ContentPopupStyle = styled(Tippy)`
  background: none;
  color: inherit;
  text-align: left;

  padding: 0;
`

const TooltipStyle = styled(Tippy)`
  ${base};
  padding: 0.6rem 0.75rem;
`

const Popup = defaultProps({
  arrow: false,
  offset: [0, 5],
  trigger: 'click',
  placement: 'bottom-start',
  interactive: true,
  duration: 0
})(ContentPopupStyle)

const Tooltip = compose(
  defaultProps({
    arrow: roundArrow,
    duration: 60,
    offset: [0, 5]
  }),
  mapProps(props => ({
    ...props,
    // backwards compatibility with @tippyjs/react v2.x
    disabled: props.enabled != null
      ? !props.enabled
      : false
  }))
)(TooltipStyle)

export {
  Popup,
  Tooltip
}
