import { css } from '@emotion/core'
import colors, { carbon, concrete, watermelon, tangerine, clearSky } from '../../Colors'

const COLOR_MAP = {
  danger: watermelon,
  warning: tangerine,
  info: clearSky
}

const base = props => {
  const { kind, outline } = props

  const color = COLOR_MAP[kind] || carbon
  const bgColor = color || concrete
  const fontColor = color || 'black'

  return css`
    font-size: 1rem;
    line-height: 1rem;

    background: ${outline ? 'none' : colors.withWeight(color, 100)};
    display: block;
    border: solid 1px ${bgColor};
    color: ${fontColor};

    padding: 0.65em 1em;
    border-radius: 0.333333rem;

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

const basic = css`
  border: none;
  background: none;
`

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
  margin-bottom: 5px;
`

export { base, basic, danger, info, warning, title, withIcon }
