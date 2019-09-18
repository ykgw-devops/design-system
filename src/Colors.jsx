import { tint, shade } from 'polished'

const concrete = '#E8E8E8'
const carbon = '#59595B'
const clearSky = '#1E90FF'
const tangerine = '#FF7F50'
const watermelon = '#EC584B'
const leaf = '#48BB78'
const lemon = '#ECC94B'

const stringMap = {
  blue: clearSky,
  grey: concrete,
  orange: tangerine,
  red: watermelon,
  green: leaf
}

const semanticsMap = {
  primary: clearSky,
  secondary: concrete,
  warning: tangerine,
  danger: watermelon,
  success: leaf
}

const nameMap = {
  concrete,
  carbon,
  clearSky,
  tangerine,
  watermelon,
  leaf,
  lemon
}

const weightMap = {
  100: (color) => tint(0.8, color),
  200: (color) => tint(0.6, color),
  300: (color) => tint(0.4, color),
  400: (color) => tint(0.2, color),
  500: (color) => color,
  600: (color) => shade(0.2, color),
  700: (color) => shade(0.4, color),
  800: (color) => shade(0.6, color),
  900: (color) => shade(0.8, color)
}

const fromString = string => stringMap[string]
function fromName (string) {
  return nameMap[string]
}
const fromSemantics = string => semanticsMap[string]

function withWeight (color, weight = 500) {
  return weightMap[weight](color)
}

export default {
  withWeight,
  fromName,
  fromString,
  fromSemantics
}

export {
  concrete,
  carbon,
  clearSky,
  tangerine,
  watermelon,
  leaf,
  lemon
}
