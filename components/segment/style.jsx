import colors from '../../colors'
import { css } from 'react-emotion'

// TODO probably not a good idea for each component?
import '../../global.jsx'

const base = css`
  background: #FFFFFF;
  border: 1px solid ${colors.CONCRETE};
  box-shadow: 0 7px 12px 0 rgba(149,149,149,0.20);
  border-radius: 4px;

  padding: 10px 20px;
`

export { base }
