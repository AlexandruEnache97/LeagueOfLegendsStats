import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

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
    try {
      setUserData({
        ...userData,
        result: false,
        message: '',
        loading: true,
      });
      const response = await fetch(`https://league-of-legends-mobile-stats.herokuapp.com/api/getUser/${username}`);
      const data = await response.json();

      if(data.status !== undefined){
        setUserData({
          ...userData,
           message: data.status.message, 
           result: false,
           loading: false,
        });
      } else {
        setUserData({
          ...data, 
          message: '',
          result: true,
          loading: false,
        });
      }
  
    } catch (error) {
      setUserData({
        ...userData,
        message: 'Backend error',
        result: false,
        loading: false,
      });
    }
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Search username:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setUsername} 
        onSubmitEditing={onSubmit}
      />
    </View>
    
    <View style={styles.container}>
    {userData.result && userData.message === '' ? (
      <>
        <Image
          style={styles.icon}
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/profileicon/${userData.profileIconId}.png`,
          }}
        />
        <Text>{userData.name}</Text>
        <Text>Level {userData.summonerLevel}</Text>
      </>
      ) : userData.message !== '' ? (
        <Text>{userData.message}</Text>
      ) : userData.loading && (
        <Text>Loading ...</Text>
      )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  },

  button: {
      width: 200,
      height: 200,
  },

  icon: {
    width: 100,
    height: 100
  }
});
