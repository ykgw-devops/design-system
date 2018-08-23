const colors = {
  ANTI_FLASH_WHITE: '#EFF2F6',
  CONCRETE: '#E8E8E8',
  CARBON: '#59595B',
  INK: '#231F20',
  CLEAR_SKY: '#1E90FF',
  TANGERINE: '#FF7F50',
  WATERMELON: '#EC584B',
  EMERALD: '#2ED573'
}

const map = {
  blue: colors.CLEAR_SKY,
  grey: colors.CONCRETE,
  orange: colors.TANGERINE,
  red: colors.WATERMELON,
  green: colors.EMERALD
}

const semantics = {
  primary: colors.CLEAR_SKY,
  secondary: colors.CONCRETE,
  warning: colors.TANGERINE,
  danger: colors.WATERMELON,
  success: colors.EMERALD
}

const fromString = string => map[string]

const fromSemantics = string => semantics[string]

export default {
  ...colors,
  fromString,
  fromSemantics
}
