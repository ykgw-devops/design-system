import React from 'react'
import PropTypes from 'prop-types'

import { css, cx } from 'react-emotion'
import { base } from './style'

const Breadcrumb = ({ sections = [] }) => {
  return (
    <nav className={base}>
      <ol>
        {sections.map(BreadCrumbItem)}
      </ol>
    </nav>
  )
}

const BreadCrumbItem = ({ name, href, key }) => {
  return (
    <li key={key || name}>
      {href ? wrapAnchor(name, href) : name}
    </li>
  )
}

function wrapAnchor (name, href) {
  return <a href={href}>{name}</a>
}

Breadcrumb.propTypes = {
  sections: PropTypes.Object,
}

export default Breadcrumb
