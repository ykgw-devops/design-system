import { css } from '@emotion/core'

export default css`
  &.tippy-box[data-animation=fade][data-state=hidden] {
    opacity: 0;
  }

  &[data-tippy-root] {
    max-width: calc(100vw - 10px);
  }

  &.tippy-box {
    position: relative;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 0.9rem;
    line-height: 1.4;
    outline: 0;
    transition-property: transform, visibility, opacity;
  }

  &.tippy-box[data-placement^=top]>.tippy-arrow {
    bottom: 0;
  }

  &.tippy-box[data-placement^=top]>.tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top
  }

  &.tippy-box[data-placement^=bottom]>.tippy-arrow {
    top: 0
  }

  &.tippy-box[data-placement^=bottom]>.tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom
  }

  &.tippy-box[data-placement^=left]>.tippy-arrow {
    right: 0
  }

  &.tippy-box[data-placement^=left]>.tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left
  }

  &.tippy-box[data-placement^=right]>.tippy-arrow {
    left: 0
  }

  &.tippy-box[data-placement^=right]>.tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right
  }

  &.tippy-box[data-inertia][data-state=visible] {
    transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)
  }

  &.tippy-arrow {
    width: 16px;
    height: 16px;
    color: #333
  }

  &.tippy-arrow:before {
    content: "";
    position: absolute;
    border-color: transparent;
    border-style: solid
  }

  &.tippy-content {
    position: relative;
    padding: 5px 9px;
    z-index: 1
  }

  &.tippy-box[data-placement^=top]>.tippy-svg-arrow {
    bottom: 0
  }

  &.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,
  &.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg {
    top: 16px;
    transform: rotate(180deg)
  }

  &.tippy-box[data-placement^=bottom]>.tippy-svg-arrow {
    top: 0
  }

  &.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg {
    bottom: 16px
  }

  &.tippy-box[data-placement^=left]>.tippy-svg-arrow {
    right: 0
  }

  &.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,
  &.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg {
    transform: rotate(90deg);
    top: calc(50% - 3px);
    left: 11px
  }

  &.tippy-box[data-placement^=right]>.tippy-svg-arrow {
    left: 0
  }

  &.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,
  &.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg {
    transform: rotate(-90deg);
    top: calc(50% - 3px);
    right: 11px
  }

  .tippy-svg-arrow {
    width: 16px;
    height: 16px;
    fill: #333;
    text-align: initial
  }

  .tippy-svg-arrow,
  .tippy-svg-arrow>svg {
    position: absolute
  }
`
