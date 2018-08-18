import colors from '../../colors'
import { fontFamily } from '../../typography'
import { darken, tint, lighten } from 'polished'
import { css } from '../../emotion'
import { base as Icon } from '../icon/style'

const sizeMap = {
  tiny: '0.7rem',
  small: '0.85rem',
  medium: '1rem',
  large: '1.15rem'
}

const color = {
  'primary': colors.CLEAR_SKY,
  'secondary': colors.ANTI_FLASH_WHITE,
  'warning': colors.TANGERINE,
  'danger': colors.WATERMELON
}

const base = css`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 0.825em 1.25em;
  color: #fff;
  border: none;
  font-weight: 400;
  vertical-align: middle;
  font-family: ${fontFamily};
  text-decoration: none;

  display: inline-block;
  text-align: center;

  background-color: ${colors.CLEAR_SKY};
  cursor: pointer;
  transition: background 80ms ease-in;

  &:hover {
    background-color: ${darken(0.05, colors.CLEAR_SKY)};
  }

  &:focus {
    outline: none;
  }

  .${Icon} {
    font-size: 1.5em;
    line-height: 0.875rem;
  }
`

const kinds = {
  primary: css`
    background-color: ${colors.CLEAR_SKY};

    &:hover {
      background-color: ${darken(0.05, colors.CLEAR_SKY)};
    }
  `,

  secondary: css`
    background-color: ${colors.ANTI_FLASH_WHITE};
    font-weight: 300;
    color: ${colors.CARBON};

    &:hover {
      background-color: ${darken(0.03, colors.ANTI_FLASH_WHITE)};
    }
  `,

  warning: css`
    background-color: ${colors.TANGERINE};

    &:hover {
      background-color: ${darken(0.05, colors.TANGERINE)};
    }
  `,

  danger: css`
    background-color: ${colors.WATERMELON};

    &:hover {
      background-color: ${darken(0.05, colors.WATERMELON)};
    }
  `
}

const kind = ({ kind }) => css`${kinds[kind]}`
const pill = ({ pill }) => pill && css`
  border-radius: 20px;
`
const outline = ({ kind, outline }) => {
  const COLOR = kind === 'secondary'
    ? colors.CARBON
    : color[kind]

  return outline && css`{
    border: solid 1px ${COLOR};
    padding: 0.750em 1.25em;
    background: none;
    box-shadow: none;
    color: ${COLOR};

    &[disabled]:hover {
      background: none;
    }

    &[disabled] {
      color: ${lighten(0.15, COLOR)};
      border-color: ${lighten(0.15, COLOR)};
    }

    &:hover {
      background-color: ${tint(0.1, COLOR)};
    }
  }`
}

const disabled = ({ kind, disabled }) => {
  const COLOR = color[kind]

  return disabled && css`
    cursor: default;
    background-color: ${lighten(0.3, COLOR)};
    box-shadow: none;

    &:hover {
      background: ${lighten(0.3, COLOR)};
    }
  `
}

const size = ({ size }) => {
  return css`
    font-size: ${sizeMap[size]}
  `
}

export { base, kind, pill, outline, disabled, size }
