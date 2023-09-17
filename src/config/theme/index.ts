import { generateCssGradient, generateSvgGradient, hexToRgba } from 'helpers/css'

const animations = {
  quickEaseInOut: '0.2s ease-in-out',
  quickEaseOut: '0.2s ease-out',
}

const colors = {
  lighterGrey: '#F8F8F8',
  lightGrey: '#E3E8ED',
  mediumGrey: '#BCC7D1',
  lightDarkGrey: '#767d93',
  darkGrey: '#363C50',
  primary: '#ED5456',
  secondary: '#0DB398',
  green: '#0DB398',
  lightViolet: '#96a3d4',
  orange: '#E5A458',
  red: '#ED5456',
  violet: '#6175BB',
  regate: '#01589F',
  mailjet: '#FEAD0D',
}

const fonts = {
  menu: 'Bebas Neue',
  primary: 'Palanquin',
  secondary: 'Montserrat',
}

const gradients = {
  primarySvg: generateSvgGradient(
    'primarySvg',
    [
      [colors.primary, '0'],
      [hexToRgba(colors.primary, 0.5), '100'],
    ],
    'vr',
  ),
  regate: generateCssGradient([
    [colors.regate, '0'],
    ['#004884', '100'],
  ]),
  regateV: generateCssGradient(
    [
      [colors.regate, '0'],
      ['#004884', '100'],
    ],
    180,
  ),
  regateSvg: generateSvgGradient(
    'regateSvg',
    [
      [colors.regate, '0'],
      ['#004884', '100'],
    ],
    'vr',
  ),
  secondarySvg: generateSvgGradient(
    'secondarySvg',
    [
      [colors.secondary, '0'],
      [hexToRgba(colors.secondary, 0.5), '100'],
    ],
    'vr',
  ),
  violetSvg: generateSvgGradient(
    'violetSvg',
    [
      [colors.violet, '0'],
      [hexToRgba(colors.violet, 0.5), '100'],
    ],
    'vr',
  ),
}

const radius = {
  full: '50%',
  medium: '5px',
  small: '3px',
}

const shadows = {
  medium: '0 0 6px',
}

const sizes = {
  0: '0rem',
  0.125: '0.125rem',
  0.1875: '0.1875rem',
  0.25: '0.25rem',
  0.4: '0.4rem',
  0.5: '0.5rem',
  0.75: '0.75rem',
  0.875: '0.875rem',
  1: '1rem',
  1.125: '1.125rem',
  1.25: '1.25rem',
  1.375: '1.375rem',
  1.5: '1.5rem',
  1.75: '1.75rem',
  2: '2rem',
  2.25: '2.25rem',
  2.5: '2.5rem',
  2.75: '2.75rem',
  3: '3rem',
  3.5: '3.5rem',
  4: '4rem',
  4.5: '4.5rem',
  5: '5rem',
  6: '6rem',
  7: '7rem',
  8: '8rem',
  9: '9rem',
  10: '10rem',
  12: '12rem',
  16: '16rem',
  18.75: '18.75rem',
  32: '32rem',
}

const weights = {
  regular: '400',
  medium: '500',
  bold: '700',
}

const typographies = {
  emphasis: {
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: weights.bold,
  },
  menuText: {
    color: colors.darkGrey,
    fontFamily: fonts.menu,
    fontSize: sizes[1],
    fontWeight: weights.regular,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: colors.darkGrey,
    fontFamily: fonts.primary,
    fontSize: sizes[1.375],
    fontWeight: weights.medium,
  },
  text: {
    color: colors.darkGrey,
    fontFamily: fonts.primary,
    fontSize: sizes[1.125],
    fontWeight: weights.regular,
    lineHeight: '170%',
  },
  title: {
    color: colors.darkGrey,
    fontFamily: fonts.secondary,
    fontSize: sizes[2.25],
    fontWeight: weights.bold,
    small: {
      fontSize: sizes[1.5],
    },
  },
}

const input = {
  ...typographies.text,
  backgroundColor: colors.lightGrey,
  borderColor: colors.mediumGrey,
  borderRadius: radius.medium,
  error: {
    borderColor: colors.red,
  },
  focus: {
    borderColor: colors.secondary,
  },
  fontSize: sizes[1],
  height: '45px',
  width: '450px',
  padding: `0 ${sizes[0.75]}`,
  placeholder: {
    color: colors.lightDarkGrey,
  },
  textarea: {
    height: '150px',
    padding: `${sizes[0.5]} ${sizes[0.75]}`,
    width: '600px',
  },
}

const theme = {
  animations,
  breakpoints: {
    sm: {
      key: 'sm',
      maxWidth: 480,
      minWidth: 0,
    },
    md: {
      key: 'md',
      maxWidth: 768,
      minWidth: 481,
    },
    mdLg: {
      key: 'mdLg',
      maxWidth: 1099,
      minWidth: 769,
    },
    lg: {
      key: 'lg',
      minWidth: 1100,
    },
  } as Breakpoints,
  colors,
  components: {
    ...typographies,
    button: {
      ...typographies.text,
      backgroundColor: colors.primary,
      borderRadius: radius.small,
      color: colors.lighterGrey,
      cursor: 'pointer',
      fontFamily: fonts.secondary,
      fontWeight: weights.bold,
      height: sizes[3],
      lineHeight: sizes[2.75],
      minWidth: sizes[9],
      padding: `${sizes[0.25]} ${sizes[1]}`,
      transition: `background-color ${animations.quickEaseInOut}`,
      disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    },
    drawer: {
      backgroundColor: colors.lightGrey,
      width: '200px',
      height: '100vh',
    },
    footer: {
      backgroundColor: colors.lightGrey,
      height: '260px',
      padding: `${sizes[2]} 10%`,
      width: '100%',
    },
    grid: {
      gridTemplateColumns: 'repeat(12,1fr)',
    },
    icon: {
      fill: colors.darkGrey,
      height: sizes[1],
      width: sizes[1],
    },
    imageSwiper: {
      maxWidth: sizes[18.75],
    },
    input,
    layout: {
      margin: sizes[4],
      maxWidth: '1100px',
      padding: `0 ${sizes[1.5]}`,
    },
    link: {
      ...typographies.text,
      color: colors.violet,
      hover: {
        color: colors.lightViolet,
      },
      textDecoration: 'underline',
    },
    menu: {
      backgroundColor: colors.lightGrey,
      focusedBorderColor: colors.primary,
      height: '65px',
      width: '100%',
      md: {
        height: '45px',
      },
    },
    select: {
      ...input,
      after: {
        iconColor: colors.mediumGrey,
      },
      focus: {
        ...input.focus,
        indicatorColor: colors.darkGrey,
      },
      menuBgColor: colors.lighterGrey,
      minimal: {
        maxWidth: '40px',
        ...typographies.menuText,
      },
      multi: {
        backgroundColor: colors.lighterGrey,
        padding: sizes[0.25],
      },
      paddingLeft: sizes[0.25],
    },
    separator: {
      after: {
        backgroundColor: colors.primary,
        size: '30%',
      },
      backgroundColor: colors.mediumGrey,
      size: '385px',
      sm: {
        size: '100%',
      },
    },
    tile: {
      ...typographies.title,
      color: colors.lighterGrey,
      default: {
        height: '170px',
        width: '330px',
      },
      icon: {
        height: '50px',
        width: '50px',
      },
      small: {
        height: '124px',
        width: '240px',
      },
    },
  },
  fonts,
  gradients,
  radius,
  shadows,
  sizes,
  weights,
}

export default theme
