import { StyleSheet } from 'react-native';
// Styles
import { palettes } from '../../../../shared/styles/palettes';

export default StyleSheet.create({
  container: {
    height: 75,
  },
  input: {
    height: 50,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: palettes.primary.main,
    paddingHorizontal: 10,
  },
  inputError: {
    color: palettes.error.main,
    paddingTop: 5,
  },
  errorBorder: {
    borderColor: palettes.error.main,
  },
});
