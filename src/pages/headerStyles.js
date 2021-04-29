import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
  },

  buttonLanguage: {
    width: 35,
    height: 35,
  },

  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 50,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default headerStyles;
