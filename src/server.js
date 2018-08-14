import createEmotionServer from 'create-emotion-server'
import * as emotion from './emotion'

const { renderStylesToString } = createEmotionServer(emotion)

export { renderStylesToString }
