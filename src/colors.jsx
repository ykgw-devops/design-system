const colors = {
  ANTI_FLASH_WHITE: '#EFF2F6',
  CONCRETE: '#E8E8E8',
  CARBON: '#59595B',
  INK: '#231F20',
  CLEAR_SKY: '#1E90FF',
  TANGERINE: '#FF7F50',
  WATERMELON: '#EC584B',
  LEAF: '#2ed573'
}

const map = {
  orange: colors.TANGERINE,
  red: colors.WATERMELON,
  blue: colors.CLEAR_SKY,
  green: colors.LEAF
}

const fromString = string => map[string]

export default {
  ...colors,
  fromString
}
