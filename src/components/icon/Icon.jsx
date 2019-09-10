/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { base, colored, circular, filled } from './Style'

const Icon = (props) => {
  const I = styled.i([
    base,
    colored(props),
    props.circular && circular(props),
    (props.circular && props.filled) && filled(props)
  ])

  return (
    <I className='material-icons'>
      {props.name}
    </I>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  circular: PropTypes.bool,
  filled: PropTypes.bool
}

export default Icon
