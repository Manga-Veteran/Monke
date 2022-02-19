import * as React from 'react';
import { Text, View, Button } from 'react-native';
import {Audio} from 'expo-av'


class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://youtu.be/OTCA8Czp0KQ' },
      { shouldPlay: true }
    
    );
  }


  playSound1 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://youtu.be/X4bCYFDhTRA' },
      { shouldPlay: true }
    
    );
  }

  playSound2 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://youtu.be/FOerbr2RS18' },
      { shouldPlay: true }
    
    );
  }
  
  playSound3 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://youtu.be/7yYCOk90LVA' },
      { shouldPlay: true }
    
    );
  }

  render() {
    return (
      <View>
      <Button title="Social Button" color="red" onPress={this.playSound} />
    <Button title="Social Button" color="green" onPress={this.playSound1} />
    </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
        
      </View>
    );
  }
}