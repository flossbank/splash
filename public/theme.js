// From https://chakra-ui.com/theme. we want to extend default theme but add colors + icons
import { theme } from '@chakra-ui/core'
import CustomIcons from './icons'

const fontStack = `"Helvetica Neue", Helvetica, Frutiger, "Frutiger Linotype",
    Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad,
    "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva,
    Arial, sans-serif`

export default {
  ...theme,
  fonts: {
    body: fontStack,
    heading: fontStack,
    mono: 'Menlo, monospace'
  },
  colors: {
    ...theme.colors,
    ocean: '#2b67af',
    lake: '#529ed6',
    puddle: '#d7e6f6',
    lightPuddle: '#DAE6F4',
    rock: '#5f6771',
    boulder: '#404042',
    lightRock: '#f2f2f2'
  },
  icons: {
    ...theme.icons,
    ...CustomIcons
  }
}
