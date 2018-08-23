const sizeMap = {
  tiny: '0.7rem',
  small: '0.85rem',
  medium: '1rem',
  [undefined]: '1rem',
  large: '1.15rem',
}

function fromString (string) {
  return sizeMap[string]
}

export default {
  fromString,
  ...sizeMap
}
