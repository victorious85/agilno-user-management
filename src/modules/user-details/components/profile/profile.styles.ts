import { StyleSheet } from 'react-native';
// Styles
import { palettes } from '../../../../shared/styles/palettes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  email: {
    color: palettes.getAdditionalColor(0),
  },
});
