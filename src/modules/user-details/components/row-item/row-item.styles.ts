import { StyleSheet } from 'react-native';
//cStyles
import { palettes } from '../../../../shared/styles/palettes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    flexWrap: 'wrap',
    gap: 10,
  },
  text: {
    flex: 1,
    fontSize: 24,
  },
  email: {
    color: palettes.getAdditionalColor(0),
  },
});
