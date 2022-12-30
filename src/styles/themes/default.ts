export const defaultTheme = {
  'blue-300': '#3294F8',
  'gray-100': '#E7EDF4',
  'gray-200': '#C4D4E3',
  'gray-300': '#AFC2D4',
  'gray-400': '#7B96B2',
  'gray-500': '#3A536B',
  'gray-600': '#1C2F41',
  'gray-700': '#112131',
  'gray-800': '#0B1B2B',
  'gray-900': '#071422',
  'gray-1000': '#040F1A',
}

export const devicesSize = {
  smartphone: '670px',
  notebook: '1024px',
}

const devices = {
  smartphone: `max-width: ${devicesSize.smartphone}`,
  notebook: `max-width: ${devicesSize.notebook}`,
}

export const { smartphone, notebook } = devices
