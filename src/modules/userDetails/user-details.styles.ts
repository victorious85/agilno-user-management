import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  column: {
    flexDirection: 'column',
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginRight: 5,
  },
  role: {
    fontSize: 12,
    color: '#888',
  },
});

export default Styles;
