import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    height: 75,
  },
  input: {
    height: 45,
    borderRadius: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  inputError: {
    color: 'red',
    paddingTop: 5,
  },
  errorBorder: {
    borderColor: 'red',
  },
});

export default Styles;
