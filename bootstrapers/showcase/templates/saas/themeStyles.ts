import colors from './colors';
export const saasTheme = ({
  transparent,
  black,
  white,
  headingColor,
  textColor,
  labelColor,
  inactiveField,
  inactiveButton,
  inactiveIcon,
  primary,
  primaryHover,
  secondary,
  secondaryHover,
  yellow,
  yellowHover,
  primaryBoxShadow,
}) => ({
  breakpoints: [575, 768, 990, 1440],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
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
  borders: [
    0,
    '1px solid',
    '2px solid',
    '3px solid',
    '4px solid',
    '5px solid',
    '6px solid',
  ],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    transparent: transparent || colors.transparent,
    black: black || colors.black,
    white: white || colors.white,
    headingColor: headingColor || colors.headingColor,
    textColor: textColor || colors.textColor,
    labelColor: labelColor || colors.labelColor,
    inactiveField: inactiveButton || colors.inactiveButton,
    inactiveButton: inactiveButton || colors.inactiveButton,
    inactiveIcon: inactiveIcon || colors.inactiveIcon,
    primary: primary || colors.primary,
    primaryHover: primaryHover || colors.primaryHover,
    secondary: secondary || colors.secondary,
    secondaryHover: secondaryHover || colors.secondaryHover,
    yellow: yellow || colors.yellow,
    yellowHover: yellowHover || colors.yellowHover,
    primaryBoxShadow: primaryBoxShadow || colors.primaryBoxShadow,
  },
  colorStyles: {
    primary: {
      color: primary || colors.primary,
      border: '1px solid',
      borderColor: primary || colors.primary,
      backgroundColor: transparent || colors.transparent,
      '&:hover': {
        color: white || colors.white,
        backgroundColor: primary || primaryHover || colors.primaryHover,
        borderColor: transparent || colors.transparent,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
        backgroundImage:
          'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)',
      },
    },
    secondary: {
      color: secondary || colors.secondary,
      borderColor: secondary || colors.secondary,
      '&:hover': {
        color:
          secondary ||
          secondaryHover ||
          secondaryHover ||
          colors.secondaryHover,
        borderColor:
          secondary ||
          secondaryHover ||
          secondaryHover ||
          colors.secondaryHover,
      },
    },
    warning: {
      color: yellow || colors.yellow,
      borderColor: yellow || colors.yellow,
      '&:hover': {
        color: yellow || yellowHover || colors.yellowHover,
        borderColor: yellow || yellowHover || colors.yellowHover,
      },
    },
    error: {
      color:
        secondary || secondaryHover || secondaryHover || colors.secondaryHover,
      borderColor:
        secondary || secondaryHover || secondaryHover || colors.secondaryHover,
      '&:hover': {
        color: secondary || colors.secondary,
        borderColor: secondary || colors.secondary,
      },
    },
    primaryWithBg: {
      color: white || colors.white,
      backgroundColor: primary || colors.primary,
      borderColor: primary || colors.primary,
      backgroundImage:
        'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)',
      '&:hover': {
        backgroundColor: primary || primaryHover || colors.primaryHover,
        borderColor: primary || primaryHover || colors.primaryHover,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
      },
    },
    secondaryWithBg: {
      color: white || colors.white,
      backgroundColor: secondary || colors.secondary,
      borderColor: secondary || colors.secondary,
      '&:hover': {
        backgroundColor:
          secondary ||
          secondaryHover ||
          secondaryHover ||
          colors.secondaryHover,
        borderColor:
          secondary ||
          secondaryHover ||
          secondaryHover ||
          colors.secondaryHover,
      },
    },
    warningWithBg: {
      color: white || colors.white,
      backgroundColor: yellow || colors.yellow,
      borderColor: yellow || colors.yellow,
      '&:hover': {
        backgroundColor: yellow || yellowHover || colors.yellowHover,
        borderColor: yellow || yellowHover || colors.yellowHover,
      },
    },
    errorWithBg: {
      color: white || colors.white,
      backgroundColor:
        secondary || secondaryHover || secondaryHover || colors.secondaryHover,
      borderColor:
        secondary || secondaryHover || secondaryHover || colors.secondaryHover,
      '&:hover': {
        backgroundColor: secondary || colors.secondary,
        borderColor: secondary || colors.secondary,
      },
    },
    transparentBg: {
      backgroundColor: white || colors.white,
      '&:hover': {
        backgroundColor: white || colors.white,
      },
    },
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: primary || colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: transparent || colors.transparent,
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
  // FlexBox: {
  //   backgroundColor: 'green'
  // }
});
