import { css, keyframes } from '../../emotion'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const base = css`
  transition-property: transform;

  animation-name: ${spin};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  animation-duration: 800ms;
`

export {
  base
}
