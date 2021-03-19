import React, {Component} from 'react';
import {
  Text,
  View,
  statusBarStyle,
  StatusBar,
  statusBarTransition,
  hidden,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang/index';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/slider5.png'),
        require('../../assets/images/slider5.png'),
        require('../../assets/images/slider5.png'),
        require('../../assets/images/slider5.png'),
      ],
    };
  }
  render() {
    return (
      <>
        <StatusBar
          animated={true}
          backgroundColor="#107dff"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={520}
          dotColor="white"
          inactiveDotColor="#90A4AE"
          backgroundColor="#107dff"
          autoplay
          circleLoop
        />
        <View style={{backgroundColor: '#44a0ff', flex: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}>
            <View style={{padding: 40, paddingTop: 55}}>
              <Pressable onPress={() =>
                  this.props.navigation.navigate(navigationStrings.OUTER_SCREEN)}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  +91{' '}
                  <Text
                    style={{fontWeight: '100', fontSize: 16, color: 'grey'}}>
                    {' '}
                    Enter Mobile Number
                  </Text>
                </Text>
              </Pressable>
              <View
                style={{backgroundColor: '#107dff', height: 2.1, marginTop: 10}}
              />
              <TouchableOpacity>
                <View
                  style={{
                    marginTop: 30,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 8,
                    margin: 4,
                    borderRadius: 12,
                    borderWidth: 1.5,
                    borderColor: '#107dff',
                    paddingLeft: 20,
                  }}>
                  <View style={{flex: 0.99}}>
                    <Text style={{color: '#107dff'}}>
                      I have an Insurance or Corporate Account
                    </Text>
                  </View>
                  <View style={{flex: 0.06, justifyContent: 'center'}}>
                    <Image
                      source={require('../../assets/images/next.png')}
                      style={{height: 12, width: 12, tintColor: '#107dff'}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{padding: 18}}>
                <Text style={{fontSize: 12}}>
                  By continuing you are agreeing to{' '}
                  <Text style={{color: '#107dff'}}>Terms and conditions</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default LandingPage;

