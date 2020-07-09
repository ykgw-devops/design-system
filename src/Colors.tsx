import { tint, shade } from 'polished'

export enum Colors {
  concrete = '#E8E8E8',
  carbon = '#59595B',
  clearSky = '#1E90FF',
  tangerine = '#FF7F50',
  watermelon = '#EC584B',
  leaf = '#48BB78',
  lemon = '#ECC94B',
  amethyst = '#9F7AEA',
}

export enum Semantics {
  primary = Colors.clearSky,
  secondary = Colors.concrete,
  warning = Colors.tangerine,
  note = Colors.lemon,
  danger = Colors.watermelon,
  success = Colors.leaf
}

export enum Strings {
  blue = Colors.clearSky,
  grey = Colors.concrete,
  orange = Colors.tangerine,
  red = Colors.watermelon,
  green = Colors.leaf,
  yellow = Colors.lemon,
  purple = Colors.amethyst
}

export type NameString = keyof typeof Colors
export type SemanticsString = keyof typeof Semantics
export type ColorString = keyof typeof Strings

export type Weight = keyof typeof weightMap

const concrete = Colors.concrete
const carbon = Colors.carbon
const clearSky = Colors.clearSky
const tangerine = Colors.tangerine
const watermelon = Colors.watermelon
const leaf = Colors.leaf
const lemon = Colors.lemon
const amethyst = Colors.amethyst

const weightMap = {
  100: (color: string) => tint(0.8, color),
  200: (color: string) => tint(0.6, color),
  300: (color: string) => tint(0.4, color),
  400: (color: string) => tint(0.2, color),
  500: (color: string) => color,
  600: (color: string) => shade(0.2, color),
  700: (color: string) => shade(0.4, color),
  800: (color: string) => shade(0.6, color),
  900: (color: string) => shade(0.8, color)
}

const fromString = (color: string) => Strings[color]
const fromName = (color: string) => Colors[color]
const fromSemantics = (color: string) => Semantics[color]
const withWeight = (color: string, weight: Weight = 500) => weightMap[weight](color)

export default {
  withWeight,
  fromName,
  fromString,
  fromSemantics
}

export {
  watermelon,
  tangerine,
  lemon,
  leaf,
  clearSky,
  amethyst,
  concrete,
  carbon
}
