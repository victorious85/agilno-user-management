import { StyleSheet } from 'react-native';
// Styles
import { palettes } from '../../../../shared/styles/palettes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
    color: palettes.common.black,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: palettes.common.black,
  },
});
