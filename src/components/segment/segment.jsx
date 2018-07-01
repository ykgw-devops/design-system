import React from 'react'
import PropTypes from 'prop-types'

import { css, cx } from 'react-emotion'
import { base } from './style.jsx'

const Segment = props => {
  return (
    <div className={base} {...props}>
      {props.children}
    </div>
  )
}

const sectionType = PropTypes.shape({
  key: PropTypes.string,
  name: PropTypes.string.isRequired,
  href: PropTypes.string
})

Segment.propTypes = {
  sections: PropTypes.arrayOf(sectionType).isRequired,
}

export default Segment
