/** @jsx jsx */
import { jsx } from '@emotion/core'
import setDisplayName from 'recompose/setDisplayName'
import PropTypes from 'prop-types'

import { base } from './form.styles.jsx'
import Field from './field'
import Input from '../input/input'

const Form = props => {
  return (
    <form {...props} css={base}>
      {props.children}
    </form>
  )
}

const noop = (event) => {
  event.preventDefault()
  event.stopPropagation()
}

Form.propTypes = {
  onSubmit: PropTypes.func
}

Form.defaultProps = {
  onSubmit: noop
}

Form.Input = setDisplayName('Form.Input')(Input)
Form.Field = setDisplayName('Form.Field')(Field)

export default Form
