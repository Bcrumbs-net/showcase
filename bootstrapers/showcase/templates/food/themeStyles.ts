import colors from './colors';

export const foodTheme = ({
  transparent,
  labelColor,
  lightBorder,
  inactiveField,
  inactiveButton,
  inactiveIcon,
  primaryHover,
  secondary,
  secondaryHover,
  yellow,
  yellowHover,
  borderColor,
  black,
  white,
  primary,
  headingColor,
  quoteText,
  textColor,
  linkColor,
  background,
}) => ({
  breakpoints: [480, 768, 990, 1220],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    roboto: '"Roboto", "Tajawal", sans-serif',
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors: {
    transparent: transparent || colors.transparent,
    labelColor: labelColor || colors.labelColor,
    lightBorder: lightBorder || colors.lightBorder,
    inactiveField: inactiveButton || colors.inactiveButton,
    inactiveButton: inactiveButton || colors.inactiveButton,
    inactiveIcon: inactiveIcon || colors.inactiveIcon,
    primaryHover: primaryHover || colors.primaryHover,
    secondary: secondary || colors.secondary,
    secondaryHover: secondaryHover || colors.secondaryHover,
    yellow: yellow || colors.yellow,
    yellowHover: yellowHover || colors.yellowHover,
    borderColor: borderColor || colors.borderColor,
    black: black || colors.black,
    white: white || colors.white,
    primary: primary || colors.primary,
    headingColor: headingColor || colors.headingColor,
    quoteText: quoteText || colors.quoteText,
    textColor: textColor || colors.textColor,
    linkColor: linkColor || colors.linkColor,
  },
  colorStyles: {
    primary: {
      color: primary || colors.primary,
      borderColor: primary || colors.primary,
      '&:hover': {
        color: primaryHover || colors.primaryHover,
        borderColor: primaryHover || colors.primaryHover,
      },
    },
    secondary: {
      color: secondary || colors.secondary,
      borderColor: secondary || colors.secondary,
      '&:hover': {
        color: secondaryHover || colors.secondaryHover,
        borderColor: secondaryHover || colors.secondaryHover,
      },
    },
    warning: {
      color: yellow || colors.yellow,
      borderColor: yellow || colors.yellow,
      '&:hover': {
        color: yellowHover || colors.yellowHover,
        borderColor: yellowHover || colors.yellowHover,
      },
    },
    error: {
      color: secondaryHover || colors.secondaryHover,
      borderColor: secondaryHover || colors.secondaryHover,
      '&:hover': {
        color: secondary || colors.secondary,
        borderColor: secondary || colors.secondary,
      },
    },
    primaryWithBg: {
      color: white || colors.white,
      backgroundColor: primary || colors.primary,
      borderColor: primary || colors.primary,
      '&:hover': {
        backgroundColor: primaryHover || colors.primaryHover,
        borderColor: primaryHover || colors.primaryHover,
      },
    },
    secondaryWithBg: {
      color: white || colors.white,
      backgroundColor: secondary || colors.secondary,
      borderColor: secondary || colors.secondary,
      '&:hover': {
        backgroundColor: secondaryHover || colors.secondaryHover,
        borderColor: secondaryHover || colors.secondaryHover,
      },
    },
    warningWithBg: {
      color: white || colors.white,
      backgroundColor: yellow || colors.yellow,
      borderColor: yellow || colors.yellow,
      '&:hover': {
        backgroundColor: yellowHover || colors.yellowHover,
        borderColor: yellowHover || colors.yellowHover,
      },
    },
    errorWithBg: {
      color: white || colors.white,
      backgroundColor: secondaryHover || colors.secondaryHover,
      borderColor: secondaryHover || colors.secondaryHover,
      '&:hover': {
        backgroundColor: secondary || colors.secondary,
        borderColor: secondary || colors.secondary,
      },
    },
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: primary || colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: `${transparent || colors.transparent}`,
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: transparent || colors.transparent,
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0,
      },
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center',
    },
  },
  backgrounds: {
    pageBackground: background,
  },
});
