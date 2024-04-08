export const palettes: Palettes.Pattern = {
  common: {
    black: '#000',
    white: '#FFFFFF', // White
    getWhiteVariation: (factor: number) => ['rgba(255, 255, 255, 0.7)'][factor],
    getBlackVariation: (factor: number) => ['rgba(0, 0, 0, 0.1)'][factor],
  },
  primary: {
    contrastText: '#FFFFFF', // White
    inactiveText: '#C9D7DC', // Inactive Sky Blue
    main: '#4B7B8B', // Sky Blue
    inverted: '#2d2d2d', // Inverted Main
    getMainVariation: (factor: number) => ['rgba(75, 123, 139, 0.3)'][factor],
    getContrastVariation: (factor: number) =>
      ['rgba(255, 255, 255, 0.15)'][factor],
  },
  grey: {
    contrastText: '#FFFFFF', // White
    10: '#E9EAEE', // Grey10
    20: '#D4D6DC', // Grey20
    40: '#A9ADBA', // Grey40
    60: '#7E8497', // Grey60
    getGrey10Variation: (factor: number) => ['rgba(217,221,227,0.2)'][factor],
    getGrey60Variation: (factor: number) => ['rgba(126,132,151,0.5)'][factor],
  },
  error: {
    contrastText: '#ffffff', // White
    main: '#EB0000', // Error Red
  },
  warning: {
    contrastText: '#ffffff', // White
    main: '#C08C03', // Sunshine
  },
  getAdditionalColor: (factor: number) => ['#0000FF', '#f2f2f2'][factor],
  sequenceColor: (factor: number) => ['#165c7d'][factor],
};
