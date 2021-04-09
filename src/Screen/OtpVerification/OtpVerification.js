import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import WrapperContainer from '../../Component/WrapperContainer';
import Mymodal from '../../Component/Mymodal';
import styles from './styles';

export default class OtpVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: true,
    };
  }

  setModalVisible = visible => {
    this.setState({
      modalVisible: visible,
    });
  };

  render() {
    const {modalVisible, title, description} = this.state;
    return (
      <WrapperContainer>
        <View style={{flex: 1}}>
          <View style={styles.backView}></View>

          <Mymodal
            navigation={this.props.navigation}
            modalVisible={modalVisible}
            setModalVisible={this.setModalVisible}
            onchangetext={this.onchangetext}
            _onchangetext={this._onchangetext}
            onAdd={this.onAdd}
            title={title}
            desc={description}
          />
        </View>
      </WrapperContainer>
    );
  }
}
