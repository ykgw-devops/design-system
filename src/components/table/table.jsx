import React from 'react'
import PropTypes from 'prop-types'
import _, { omit, upperFirst } from 'lodash'

import { cx } from '../../emotion'
import { base } from './style.jsx'

const Table = props => {
  if (!props.rows) return null

  const headers = parseHeaders(props)
  return (
    <table {...omit(props, ['rows', 'headers'])} className={cx(base, props.className)}>
      {renderHeaders(headers)}
      {renderRows(props.rows, headers)}
    </table>
  )
}

const parseHeaders = ({ headers, rows }) => {
  if (headers) return headers
  return _(rows)
    .flatMap(Object.keys)
    .uniq()
    .value()
}

const renderHeaders = (headers = []) => (
  <thead>
    <tr>
      {headers.map(Header)}
    </tr>
  </thead>
)

const renderRows = (rows, headers) => {
  const values = rows.map(row => {
    return headers.map(header => row[header] || '')
  })

  return <tbody>{values.map(Row)}</tbody>
}

const Header = key => (
  <th key={key}>{upperFirst(key)}</th>
)

const Row = (row, i) => (
  <tr key={i}>
    {row.map(Column)}
  </tr>
)

const Column = col => (
  <td>{col.toString()}</td>
)

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.object)
}

Table.defaultProps = {
  rows: []
}

export default Table
