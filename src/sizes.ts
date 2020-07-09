export enum Size {
  tiny = '0.7rem',
  small = '0.85rem',
  medium = '1rem',
  large = '1.15rem'
}

export type SizeString = keyof typeof Size

function fromString (size: string) {
  return size ? Size[size] : Size.medium
}

export default {
  fromString,
  ...Size
}
