import { StyleSheet } from 'react-native';
// Styles
import { palettes } from '../../../../shared/styles/palettes';

export default StyleSheet.create({
  input: {
    width: '80%',
    maxHeight: 50,
    fontSize: 18,
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palettes.primary.main,
    overflow: 'hidden',
  },
});
