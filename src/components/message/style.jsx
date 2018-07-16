import { css, cx } from 'emotion'
import colors from '../../colors'
import { tint } from 'polished'

const COLOR_MAP = {
  'danger': colors.WATERMELON,
  'warning': colors.TANGERINE,
  'info': colors.CLEAR_SKY
}

const base = props => {
  const { kind, outline } = props

  const color = COLOR_MAP[kind]
  const bgColor = color || colors.CONCRETE
  const fontColor = color || colors.INK

  return css`
    background: ${outline ? 'none' : tint(0.15, bgColor)};
    display: block;
    border: solid 2px ${bgColor};
    color: ${fontColor};

    padding: 10px 20px;
    border-radius: 0.25em;

    display: flex;
    align-items: center;

    header {
      font-weight: 600;
    }

    header, p {
      display: block;
    }

  `
}

const withIcon = (name) => css`
  &:before {
    font-family: 'Material Icons';
    font-size: 1.5em;
    line-height: 1em;
    content: '${name}';

    margin-right: 10px;
  }
`

const danger = css`
  ${withIcon('error')};
`

const info = css`
  ${withIcon('info')};
`

const warning = css`
  ${withIcon('warning')};
`

const title = css`
  display: block;
  font-weight: 600;
`

export { base, danger, info, warning, title }
