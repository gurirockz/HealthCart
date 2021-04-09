import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import WrapperContainer from '../../Component/WrapperContainer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang/en';
import apis from '../../redux/actions';
import validator from '../../utils/validations';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import styles from './styles';

export default class LoginMedi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  isValidData = () => {
    const {email, password} = this.state;
    const error = validator({
      email: email,
      password: password,
    });
    if (error) {
      showMessage({
        type: 'info',
        icon: 'info',
        message: error,
      });

      return false;
    } else {
      this.props.navigation.navigate(navigationStrings.TAB_ROUTES);
    }
  };

  getInputValue(key) {
    return value =>
      this.setState({
        [key]: value,
      });
  }

  render() {
    const {name, email, password} = this.state;
    return (
      <WrapperContainer>
        <View style={styles.mainView}>
          <View style={styles.paddedBox}>
            <View style={styles.heading}>
              <Text style={styles.information}>Enter Your Information</Text>
            </View>

            <TextInput
              style={styles.inputText}
              placeholder={strings.YOUR_EMAIL}
              onChangeText={this.getInputValue('email')}></TextInput>
            <View style={styles.blueMargin} />

            <TextInput
              style={styles.inputText}
              placeholder={strings.ENTER_PASSWORD}
              onChangeText={this.getInputValue('password')}></TextInput>

            <View style={styles.blueMargin} />

            <View style={styles.buttonLogin}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={this.isValidData}>
                <Text style={styles.textStyle}>LOGIN</Text>
              </TouchableOpacity>

              <AntDesign name="arrowright" color="white" size={25} />
            </View>
          </View>
        </View>
        <FlashMessage position="top" />
      </WrapperContainer>
    );
  }
}
