import React, { Component } from 'react'
import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity, response} from 'react-native'
import Header from '../../Components/Header'
import LabelTextInput from '../../Components/LabelTextInput';
import WrapperContainer from '../../Components/WrapperContainer';
import apis from "../../redux/actions"
import { showMessage } from 'react-native-flash-message';
import validator from "../../utils/validations"
import navigationStrings from '../../constants/navigationStrings';

class Email extends Component {
  state={
    userEmail:"",
    userPassword:"",
    isLoading:false,
  }

  _onBackPress=()=>{
    const {navigation}=this.props;
    navigation.goBack();
  }

  isValid = () => {
    const { userEmail, userPassword} = this.state;
    const error = validator({email: userEmail, password: userPassword})
    if (error) {

        showMessage({
            type: "danger",
            icon: "danger",
            message: error
        })

        return false;
    }
    return true;
};

  _onLogin=()=>{
    const { navigation } = this.props;
    const { userEmail, userPassword} = this.state;

        if (this.isValid()) {
            this.setState({
                isLoading: true
            })

            apis.login({email: userEmail, password: userPassword})
                .then(response => {
                  navigation.navigate(navigationStrings.HOME);
                    showMessage({
                        type: "success",
                        icon: "success",
                        message:"Logged in successfully"
                    })
                }).catch((error) => {
                    this.setState({ isLoading: false });
                    showMessage({
                        type: "danger",
                        icon: "danger",
                        message: error.message
                    })
                });
        }
  }
  _onChangeText=key=> {
    return (value) => {
        this.setState({
            [key]: value,
        });
    };
}
    render() {
        return (
          <WrapperContainer>
            <Header isBackHeaderVisible={true} screenNameTxt={"Log In"} _onBackPress={this._onBackPress}/>
            <View>
            <LabelTextInput placeholder={"E-mail"} _onChangeText={this._onChangeText} 
            inputKey="userEmail" />
            <LabelTextInput placeholder={"Password"}  isSecureTextEntry={true} _onChangeText={this._onChangeText} 
             inputKey="userPassword"/>
            </View>
            <View>
            <TouchableOpacity
            onPress={this._onLogin} style={{backgroundColor: 'blue', width: 100, height: 50, justifyContent: 'center', marginLeft: 150, marginTop: 50}}>
              <Text style={{textAlign: 'center', color: 'white'}}>LOGIN</Text>
            </TouchableOpacity>
            </View>
          </WrapperContainer>
        )
    }
}

export default Email;