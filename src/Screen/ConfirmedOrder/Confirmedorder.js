import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ConfirmedOrder extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default ConfirmedOrder;
