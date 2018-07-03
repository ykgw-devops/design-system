import createEmotion from 'create-emotion'

/**
 * We need to create a separate Emotion instance to prevent classname collisions
 * with other emotion instances
 */
const context = global || {}

Object.assign(context, {
  __WAYLAY_COMPONENTS__: context.__WAYLAY_COMPONENTS__ || {}
})

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  caches
} = createEmotion(context.__WAYLAY_COMPONENTS__, {
  key: 'waylay-components'
})
