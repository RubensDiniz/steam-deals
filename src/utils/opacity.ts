const hslaRegex =
  /^hsla\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),\s?(0|100|\d{1,2})%,\s?(0|100|\d{1,2})%,\s?(0?\.\d|1(\.0)?)\)$/

export const opacity = (color: string, opacity = 1) => {
  if (!color.startsWith('hsla')) throw new Error('"opacity" only works with HSLA colors.')

  return color.replace(hslaRegex, `hsla($1,$2%,$3%,${opacity})`)
}
