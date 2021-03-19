import React, { Component } from 'react';
import { Text, View , statusBarTransition, StatusBar, hidden} from 'react-native';
import { height } from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';

class ShoppingCart extends Component {
  render() {
    return (
        <>
        <StatusBar
          animated={true}
          backgroundColor="#4C8CFF"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <View style={{backgroundColor: '#2267F7', flex: 0.3, justifyContent: 'space-around'}}>
        {/* <Image source={require('../../assets/images/wallet.png')} style={{height: 30, width: 30}}/>
        <Image source={require('../../assets/images/menu.png')} style={{height: 30, width: 30}} /> */}
        

        </View>
        </>
    );
  }
}

export default ShoppingCart;