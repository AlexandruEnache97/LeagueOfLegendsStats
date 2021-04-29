import React, { useState } from 'react';
import {
  Image, Text, TextInput, View,
} from 'react-native';
import searchUserStyles from './searchUserStyles';
import { LEAGUE_API } from '../config';
import retrieveSummoner from '../utils/search-summoner';
import Header from './Header';

export default function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({
    accountId: '',
    id: '',
    name: '',
    profileIconId: '',
    puuid: '',
    revisionDate: '',
    summonerLevel: 0,
    result: false,
    message: '',
    loading: false,
  });

  const onSubmit = async () => {
    setUserData({
      ...userData,
      result: false,
      message: '',
      loading: true,
    });
    const result = await retrieveSummoner(username);
    setUserData({ ...userData, ...result });
  };

  return (
    <View style={searchUserStyles.page}>
      <Header />
      <View style={searchUserStyles.container}>
        <Image
          style={searchUserStyles.logo}
          source={{ uri: 'https://img.icons8.com/carbon-copy/200/ffffff/league-of-legends.png' }}
        />
        {/* <Text style={searchUserStyles.title}>Search username:</Text> */}
        <TextInput
          style={searchUserStyles.input}
          placeholder="Search for summoner"
          onChangeText={setUsername}
          onSubmitEditing={onSubmit}
        />
        {userData.loading && <Text style={searchUserStyles.text}>Loading ...</Text>}
        {userData.result && userData.message === '' ? (
          <View style={searchUserStyles.userContainer}>
            <Image
              style={searchUserStyles.icon}
              source={{
                uri: `${LEAGUE_API.getIcon}/${userData.profileIconId}.png`,
              }}
            />
            <Text style={searchUserStyles.text}>{userData.name}</Text>
            <Text style={searchUserStyles.text}>
              Level
              {' '}
              {userData.summonerLevel}
            </Text>
          </View>
        ) : userData.message !== '' && (
          <Text style={searchUserStyles.text}>{userData.message}</Text>
        )}
      </View>
    </View>
  );
}
