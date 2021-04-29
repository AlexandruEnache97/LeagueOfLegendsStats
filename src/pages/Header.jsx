/* eslint-disable global-require */
import React from 'react';
import {
  Text, TouchableOpacity, Image, View,
} from 'react-native';
import headerStyles from './headerStyles';

const Header = () => (
  <View style={headerStyles.container}>
    <View>
      <TouchableOpacity>
        <Image style={headerStyles.button} source={require('../../assets/icons/controller.png')} />
      </TouchableOpacity>
    </View>
    <Text style={headerStyles.title}>League of Legends</Text>
    <View>
      <TouchableOpacity>
        <Image style={headerStyles.buttonLanguage} source={{ uri: 'https://img.icons8.com/android/96/ffffff/globe.png' }} />
      </TouchableOpacity>
    </View>
  </View>
);

export default Header;
