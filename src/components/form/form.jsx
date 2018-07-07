import React from 'react'
import { base } from './style'
import Field from './field'
import Input from '../input/input'
import { setDisplayName } from 'recompose'
import PropTypes from 'prop-types'

const Form = props => {
  return (
    <form {...props} className={base}>
      {props.children}
    </form>
  )
}

const noop = (event) => {
  event.preventDefault()
  event.stopPropagation()
}

Form.propTypes = {
  onSubmit: PropTypes.function
}

Form.defaultProps = {
  onSubmit: noop
}

Form.Input = setDisplayName('Form.Input')(Input)
Form.Field = setDisplayName('Form.Field')(Field)

export default Form
