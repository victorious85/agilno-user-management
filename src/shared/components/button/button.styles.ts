import { StyleSheet } from 'react-native';
// Styles
import { palettes } from '../../styles/palettes';

export default StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    paddingVertical: 13,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palettes.primary.main,
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: palettes.common.white,
  },
});
