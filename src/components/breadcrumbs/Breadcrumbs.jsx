
import PropTypes from 'prop-types'

import { base, item } from './Breadcrumbs.styles'

const Breadcrumb = ({ sections = [] }) => {
  return (
    <nav css={base}>
      {sections.map(BreadCrumbItem)}
    </nav>
  )
}

const BreadCrumbItem = ({ name, content, key }) => {
  content = content || name
  return (
    <span css={item} key={key || content}>
      {content}
    </span>
  )
}

const sectionType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
})

Breadcrumb.propTypes = {
  sections: PropTypes.arrayOf(sectionType).isRequired
}

export default Breadcrumb
