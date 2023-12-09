import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const styles = {
  global: (props: any) => ({
    body: {
      background: mode('#F0E7DB', '#202023')(props),
      fontFamily: 'Coming Soon, cursive',
      overflowX: 'hidden',
    },
  }),
}

const components = {
  Heading: {
    baseStyle: {
      fontFamily: 'monospace',
    },
    variants: {
      'section-title': {
        textDecoration: 'underline',
        textDecorationColor: '#525252',
        textUnderlineOffset: 6,
        textDecorationThickness: 4,
        fontSize: 'xl',
        lineHeight: 7,
      },
      'bio-title': {
        fontSize: 'md',
        lineHeight: 'base',
      },
    },
  },
  Badge: {
    baseStyle: {
      fontFamily: 'monospace',
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode('#3D7AED', '#DDA0DD')(props),
      textUnderlineOffset: 3,
    }),
  },
}

const theme = extendTheme({ config, styles, components })

export default theme
