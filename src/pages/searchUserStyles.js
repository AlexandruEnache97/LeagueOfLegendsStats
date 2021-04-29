import { StyleSheet } from 'react-native';

const searchUserStyles = StyleSheet.create({
  button: {
    width: 200,
    height: 200,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 100,
    height: 100,
  },

  input: {
    marginTop: 30,
    width: '60%',
    height: 35,
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 15,
    borderRadius: 10,
  },

  logo: {
    width: 100,
    height: 100,
  },

  text: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },

  userContainer: {
    marginTop: 100,
    alignItems: 'center',
  },

  page: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
  },
});

export default searchUserStyles;
