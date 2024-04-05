declare global {
  namespace Palettes {
    type ColorVariations = (factor: number) => string;

    interface Pattern {
      common: {
        black: string;
        white: string;
        getWhiteVariation: ColorVariations;
        getBlackVariation: ColorVariations;
      };
      primary: {
        contrastText: string;
        inactiveText: string;
        main: string;
        inverted: string;
        getMainVariation: ColorVariations;
        getContrastVariation: ColorVariations;
      };
      grey: {
        contrastText: string;
        10: string;
        20: string;
        40: string;
        60: string;
        getGrey10Variation: ColorVariations;
        getGrey60Variation: ColorVariations;
      };
      error: {
        contrastText: string;
        main: string;
      };
      warning: {
        contrastText: string;
        main: string;
      };
      getAdditionalColor: ColorVariations;
      sequenceColor: ColorVariations;
    }
  }
}

export {};
