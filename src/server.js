import createEmotionServer from 'create-emotion-server'
import * as emotion from './emotion'

const {
  extractCritical,
  renderStylesToString,
  renderStylesToNodeStream
} = createEmotionServer(emotion)

export { renderStylesToString }
