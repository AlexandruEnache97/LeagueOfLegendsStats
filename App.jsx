import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import appStyles from './appStyles';
import SearchUser from './src/pages/SearchUser';

export default function App() {
  return (
    <SafeAreaView style={appStyles.container}>
      <SearchUser />
      <StatusBar />
    </SafeAreaView>
  );
}
