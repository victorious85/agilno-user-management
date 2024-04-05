import { StyleSheet } from 'react-native';
// Styles
import { palettes } from '../../../../shared/styles/palettes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    backgroundColor: palettes.primary.getMainVariation(0),
    marginHorizontal: 10,
  },
  infoContainer: {
    flex: 1,
    gap: 4,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
