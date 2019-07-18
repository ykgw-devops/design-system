const antiFlashWhite = '#EFF2F6'
const concrete = '#E8E8E8'
const carbon = '#59595B'
const ink = '#231F20'
const clearSky = '#1E90FF'
const tangerine = '#FF7F50'
const watermelon = '#EC584B'
const leaf = '#00C752'

const map = {
  blue: clearSky,
  grey: concrete,
  orange: tangerine,
  red: watermelon,
  green: leaf
}

const semantics = {
  primary: clearSky,
  secondary: concrete,
  warning: tangerine,
  danger: watermelon,
  success: leaf
}

const fromString = string => map[string]
const fromSemantics = string => semantics[string]

export default {
  fromString,
  fromSemantics
}

export {
  antiFlashWhite,
  concrete,
  carbon,
  ink,
  clearSky,
  tangerine,
  watermelon,
  leaf
}
