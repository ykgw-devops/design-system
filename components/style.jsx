import colors from '../colors'
import { darken } from 'polished'
import { cx, css } from 'react-emotion'

// TODO probably not a good idea for each component?
import '../global.jsx'

const base = css`
  box-shadow: 1px 1px 2px 0 rgba(136, 136, 136, 0.50);
  border-radius: 4px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  font-weight: 400;
  font-size: 1rem;

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
      background-color: ${darken(0.02, colors.ANTI_FLASH_WHITE)};
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

const shapes = {
  pill: css`
    border-radius: 20px;
  `
}

const kind = props => css`${kinds[props.kind]}`
const shape = props => css`${shapes[props.shape]}`

export { base, kind, shape }
