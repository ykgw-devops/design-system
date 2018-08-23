import React from 'react'
import PropTypes from 'prop-types'

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

const BreadCrumbItem = ({ name, content, key }) => {
  content = content || name
  return (
    <li key={key || content}>
      {content}
    </li>
  )
}

const sectionType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string,
  content: PropTypes.element
})

Breadcrumb.propTypes = {
  sections: PropTypes.arrayOf(sectionType).isRequired
}

export default Breadcrumb
