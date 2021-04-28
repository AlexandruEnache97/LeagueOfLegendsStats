import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import appStyles from './appStyles';
import SearchUser from './src/pages/SearchUser';

export default function App() {
  return (
    <View style={appStyles.container}>
      <Text>League of legends api application !!!</Text>
      <SearchUser />
      <StatusBar appStyles="auto" />
    </View>
  );
}
