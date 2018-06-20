import colors from '../colors'
import { darken, tint, lighten } from 'polished'
import { cx, css } from 'react-emotion'

// TODO probably not a good idea for each component?
import '../global.jsx'

const color = {
  'primary': colors.CLEAR_SKY,
  'secondary': colors.ANTI_FLASH_WHITE,
  'warning': colors.TANGERINE,
  'danger': colors.WATERMELON
}

const base = css`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 0.875rem;
  vertical-align: middle;
  line-height: 20px;

  background-color: ${colors.CLEAR_SKY};
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.05, colors.CLEAR_SKY)};
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

const kind = ({ kind = 'primary' }) => css`${kinds[kind]}`
const pill = ({ pill }) => pill && css`
  border-radius: 20px;
`
const outline = ({ outline, kind = 'primary' }) => outline && css`{
  border: solid 1px ${color[kind]};
  background: none;
  box-shadow: none;
  color: ${color[kind]};

  &[disabled]:hover {
    background: none;
  }

  &[disabled] {
    color: ${lighten(0.15, color[kind])};
    border-color: ${lighten(0.15, color[kind])};
  }

  &:hover {
    background-color: ${tint(0.075, color[kind])};
  }
}`

const disabled = ({ kind = 'primary', disabled }) => disabled && css`
  cursor: default;
  background-color: ${lighten(0.3, color[kind])};
  box-shadow: none;

  &:hover {
    background: ${lighten(0.3, color[kind])};
  }
`

export { base, kind, pill, outline, disabled }
