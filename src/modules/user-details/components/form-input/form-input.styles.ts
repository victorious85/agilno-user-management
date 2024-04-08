import { StyleSheet } from 'react-native';
// Styles
import { palettes } from '../../../../shared/styles/palettes';

export default StyleSheet.create({
  container: {
    height: 80,
  },
  input: {
    height: 50,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: palettes.primary.main,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  inputError: {
    color: palettes.error.main,
    paddingTop: 3,
  },
  inputLabel: {
    position: 'absolute',
    backgroundColor: palettes.getAdditionalColor(1),
    top: -8,
    left: 12,
    zIndex: 2,
  },
  errorBorder: {
    borderColor: palettes.error.main,
  },
});
