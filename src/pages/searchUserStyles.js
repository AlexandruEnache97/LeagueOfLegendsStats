import { StyleSheet } from 'react-native';

const searchUserStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  input: {
    width: 200,
    height: 25,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    paddingLeft: 5,
  },

  button: {
    width: 200,
    height: 200,
  },

  icon: {
    width: 100,
    height: 100,
  },
});

export default searchUserStyles;
