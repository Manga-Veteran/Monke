import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen';
import SocialScreen from './screens/SocialScreen';
import VideoScreen from './screens/VideoScreen';
// You can import from local files
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  VideoScreen: VideoScreen,
  SocialScreen: SocialScreen,
});

const AppContainer = createAppContainer(AppNavigator);
