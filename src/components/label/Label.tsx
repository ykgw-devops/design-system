/** @jsx jsx */
import { HTMLAttributes } from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import { base, close, colored, detail, focused, value, size } from './Label.styles'
import { Size } from '../../sizes'
import { withProps } from 'recompose'

type DivElementAttrs = HTMLAttributes<HTMLDivElement>

export interface ILabelProps extends DivElementAttrs {
  name?: string;
  color?: string;
  size?: Size;
  outline?: boolean;
  removable?: boolean;
  focused?: boolean;
  onClose?: () => void
}

// Icon with larger hitbox and cursor pointer
const Close = withProps<any, DivElementAttrs>({
  children: '\u00D7'
})(styled.div``)

const Container = styled('div', {
  shouldForwardProp: isPropValid
})`
  ${(props: ILabelProps) => base(props)};
  ${(props: ILabelProps) => colored(props)};
  ${(props: ILabelProps) => focused(props)};
  ${(props: ILabelProps) => size(props)};
`

const Label = (props: ILabelProps) => {
  const { name, children, removable, onClose, ...rest } = props

  return (
    <Container {...rest}>
      {name &&
        <div css={detail(props)}>
          {name}
        </div>}
      <div css={value(props)}>
        {children}
        {removable && <Close css={close(props)} onClick={onClose} />}
      </div>
    </Container>
  )
}

Label.defaultProps = {
  color: '',
  size: 'medium',
  outline: false,
  removable: false,
  focused: false,
  onClose: () => {}
}

export default Label
