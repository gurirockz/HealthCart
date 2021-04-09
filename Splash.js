import React, {Component} from 'react';
import {View, ImageBackground, Image} from 'react-native';

var bg = require('./download.jpeg');
var logo = require('./buddy.png');
export default class Splash extends Component {
  render() {
    return (
      <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={logo} style={{width: 100, height: 100}}></Image>
        </View>
      </ImageBackground>
    );
  }
}
