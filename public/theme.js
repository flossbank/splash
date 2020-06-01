// From https://chakra-ui.com/theme. we want to extend default theme but add colors + icons
import { theme } from '@chakra-ui/core'
import CustomIcons from './icons'

export default {
  ...theme,
  colors: {
    ...theme.colors,
    ocean: '#2b67af',
    lake: '#529ed6',
    puddle: '#d7e6f6',
    rock: '#5f6771',
    boulder: '#404042',
    lightRock: '#f2f2f2'
  },
  icons: {
    ...theme.icons,
    ...CustomIcons
  }
}
