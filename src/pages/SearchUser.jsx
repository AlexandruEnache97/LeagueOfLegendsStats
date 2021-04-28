import React, { useState } from 'react';
import {
  Image, Text, TextInput, View,
} from 'react-native';
import searchUserStyles from './searchUserStyles';
import { LEAGUE_API } from '../config';
import retrieveSummoner from '../utils/search-summoner';

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
    <>
      <View style={searchUserStyles.container}>
        <Text style={searchUserStyles.title}>Search username:</Text>
        <TextInput
          style={searchUserStyles.input}
          onChangeText={setUsername}
          onSubmitEditing={onSubmit}
        />
      </View>

      <View style={searchUserStyles.container}>
        {userData.loading && <Text>Loading ...</Text>}
        {userData.result && userData.message === '' ? (
          <>
            <Image
              style={searchUserStyles.icon}
              source={{
                uri: `${LEAGUE_API.getIcon}/${userData.profileIconId}.png`,
              }}
            />
            <Text>{userData.name}</Text>
            <Text>
              Level
              {' '}
              {userData.summonerLevel}
            </Text>
          </>
        ) : userData.message !== '' && (
          <Text>{userData.message}</Text>
        )}
      </View>
    </>
  );
}
