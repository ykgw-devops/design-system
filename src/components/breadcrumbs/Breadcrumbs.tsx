/** @jsx jsx */
import { jsx } from '@emotion/core'

import { base, item } from './Breadcrumbs.styles'

interface Section {
  name?: string;
  key: string;
  content: React.ReactNode;
}

interface IBreadcrumbProps {
  sections: Section[]
}

const Breadcrumb = ({ sections = [] }: IBreadcrumbProps) => {
  return (
    <nav css={base}>
      {sections.map(BreadCrumbItem)}
    </nav>
  )
}

const BreadCrumbItem = ({ name, content, key }: Section) => {
  content = content || name
  return (
    <span css={item} key={key || String(content)}>
      {content}
    </span>
  )
}

export default Breadcrumb
