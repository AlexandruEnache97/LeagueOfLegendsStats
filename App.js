import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchUser from './src/pages/SearchUser';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>League of legends api application !!!</Text>
      <SearchUser />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
