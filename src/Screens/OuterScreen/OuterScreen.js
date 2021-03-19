import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  statusBarStyle,
  statusBarTransition,
  StatusBar,
  hidden,
  TextInput,
  StyleSheet,
  value,
  number,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import {
  moderateScaleVertical,
  textScale,
  moderateScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang/index';
import fontFamily from '../../styles/fontFamily';
import GradientButton from '../../Components/GradientButton';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import imagePath from '../../constants/imagePath';
import {SliderBox} from 'react-native-image-slider-box';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import isJs from 'is_js';

export default function OuterScreen({navigation}) {
  const moveToNewScreen = (screenName, data = {}) => () => {
    navigation.navigate(screenName, {data});
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#4C8CFF"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <View style={{flex: 1, backgroundColor: '#2B8CFF', padding: 30}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            borderWidth: 2.5,
            borderColor: '#DBDBDB',
            padding: 30,
          }}>
          <View style={{flexDirection: 'row-reverse'}}>
            <Image
              source={require('../../assets/images/medibuddyWithName.jpg')}
              style={{width: 120, height: 25}}></Image>
          </View>
          <View style={{flexDirection: 'row', marginTop: 60}}>
            <View style={{flex: 0.2, justifyContent: 'center'}}>
              <Text style={{fontSize: 20}}>+91</Text>
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
              <TextInput
                style={{height: 40}}
                value={number}
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 0.05, justifyContent: 'center'}}>
              <View
                style={{
                  backgroundColor: '#EDEEED',
                  justifyContent: 'center',
                  borderRadius: 10,
                  height: 15,
                  width: 15,
                }}>
                <Text
                  style={{color: '#3591F6', textAlign: 'center', fontSize: 10}}>
                  X
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#107dff',
              height: 2,
              marginTop: 7,
              marginBottom: 10,
            }}
          />
          <Text>Send me important Updates on Whatsapp</Text>
          <View style={{flexDirection: 'row-reverse'}}>
          <Pressable
          onPress={moveToNewScreen(navigationStrings.OTP_VERIFICATION)}
          style={{
            backgroundColor: '#1E88FD',
            height: 35,
            width: 100,
            justifyContent: 'center',
            borderRadius: 12,
            marginTop: 40,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>Get OTP</Text>
        </Pressable>
        </View>
        </View>

      </View>
    </>
  );
}
