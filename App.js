//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Routes from './src/Navigation/Routes';
import {getUserData} from './src/utils/utils';
import store from './src/redux/store';
import types from './src/redux/types';
import {Connect, Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const {dispatch} = store;

class MyClass extends Component {
  componentDidMount() {
    // getFCMToken();
    getUserData().then(userData => {
      if (userData) {
        dispatch({
          type: types.ISLOGIN,
          payload: userData,
        });
        setTimeout(() => SplashScreen.hide());
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default MyClass;
