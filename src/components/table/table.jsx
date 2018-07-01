import React from 'react'
import PropTypes from 'prop-types'
import { omit, upperFirst } from 'lodash'

import { cx } from 'react-emotion'
import { base } from './style.jsx'

const Table = props => {
  return (
    <table {...omit(props, 'rows')} className={cx(base)}>
      {parseHead(props.rows)}
      {parseRows(props.rows)}
    </table>
  )
}

// TODO improve algorithm to detect all columns when keys are not
// consistent for all items of the "rows" array
const parseHead = rows => (
  <thead>
    <tr>{Object.keys(rows[0]).map(Header)}</tr>
  </thead>
)

const parseRows = rows => (
  <tbody>
    {rows.map(Row)}
  </tbody>
)

const Header = key => (
  <th key={key}>{upperFirst(key)}</th>
)

const Row = (row, i) => (
  <tr key={i}>
    {Object.values(row).map(Column)}
  </tr>
)

const Column = col => (
  <td>{col}</td>
)

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object)
}

Table.defaultProps = {
  rows: []
}

export default Table
