import React, { useRef, HTMLAttributes, createElement, useEffect, useState, useCallback } from 'react'
import { css } from '@emotion/core'
import { camelCase, mapKeys } from 'lodash'

export interface IIconProps extends HTMLAttributes<HTMLElement> {
  name: string
  iconData: [string, number, number, any[], string[]]
  color?: string
  width?: number
  height?: number
}

const base = css`
  display: inline-flex;
  align-items: center;

  padding: 2px;
  user-select: none;
`

const StreamlineIcon = (props: IIconProps) => {
  const basePixelSize = parseInt(
    window.getComputedStyle(document.body).getPropertyValue('font-size')
  ) || 16

  const ref = useRef<HTMLElement>(null)
  const { name, className } = props
  const [size, setSize] = useState(basePixelSize)

  // create the MutationObserver to detect changes to size or color
  useEffect(() => {
    if (!ref.current) return

    const observer = new MutationObserver(() => {
      setComputedValues(ref.current)
    })

    observer.observe(ref.current, {
      attributes: false,
      subtree: true,
      childList: true
    })

    return () => {
      observer.disconnect()
    }
  }, [ref.current])

  // find computed size and color from DOM element
  const setComputedValues = useCallback((elem: HTMLElement) => {
    const computedStyles = window.getComputedStyle(elem)
    const computedSize = parseInt(computedStyles.getPropertyValue('font-size')) || basePixelSize

    setSize(computedSize)
  }, [ref.current])

  // apply computed styles to state
  useEffect(() => {
    if (ref.current) {
      setComputedValues(ref.current)
    }
  }, [ref.current])

  return (
    <i
      ref={ref}
      className={className}
      css={base}
      role='img'
      aria-label={name}
    >
      <Icon iconData={props.iconData} size={props.width ?? size} color={props.color} />
    </i>
  )
}

// defaults for the vector paths
const pathDefaults = {
  fill: '#000',
  stroke: 'none',
}

function Icon ({ iconData, size, color }: { iconData: any, size: number, color: string }) {
  if (!iconData) {
    throw Error('Missing prop "iconData" for StreamlineIcon')
  }

  const [name, defaultWidth, defaultHeight, pathOptions = [], paths = []] = iconData

  // render the SVG paths
  const renderPaths = paths.map((path: string, index: number) => {
    const configProps = pathOptions[index]

    const pathProps = {
      ...pathDefaults,
      ...mapKeys(configProps, camelCase),
      fill: color ?? 'currentcolor' ?? '#' + configProps.fill,
      key: Math.random().toString(),
      d: path
    }

    return createElement('path', pathProps)
  })

  const width = size ?? defaultWidth
  const height = size ?? defaultHeight

  const scaleX = size / defaultWidth
  const scaleY = size / defaultHeight

  // create the SVG element
  return createElement('svg', {
    viewBox: `0 0 ${width} ${height}`,
    width,
    height,
    // use a <g> so we can scale the vector
    children: createElement('g', {
      transform: `scale(${scaleX}, ${scaleY})`,
      children: renderPaths
    })
  })
}

export default StreamlineIcon
