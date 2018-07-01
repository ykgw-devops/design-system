import React from 'react'
import { base } from './style.jsx'

const Form = props => {
  return (
    <form {...props} className={base}>
      {props.children}
    </form>
  )
}

Form.propTypes = {}

export default Form
