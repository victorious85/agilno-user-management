import { StyleSheet } from 'react-native';
// Styles
import { palettes } from '../../../../shared/styles/palettes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: palettes.primary.getMainVariation(0),
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
