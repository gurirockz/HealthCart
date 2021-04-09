import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import strings from '../constants/lang';
import AntDesign from 'react-native-vector-icons/AntDesign';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';

const Mymodal = props => {
  const {modalVisible, setModalVisible, navigation} = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Image
                source={require('../assets/images/medibuddyLogo.png')}
                style={{resizeMode: 'contain', width: 100, height: 30}}
              />
            </View>

            <View style={{marginVertical: 50}}>
              <View style={styles.box}>
                <Text style={styles.indianCode}>{strings.INDIAN_CODE}</Text>

                <TextInput
                  style={styles.modalTextinput}
                  placeholder={strings.ENTER_MOBILE_NO}></TextInput>
              </View>

              <View style={styles.otpButton}></View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  navigation.navigate(navigationStrings.OTP_CONFIRMATION);
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Get OTP</Text>
              </TouchableOpacity>

              <AntDesign
                name="arrowright"
                color={colors.whiteOpacity22}
                size={25}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 25,
    minHeight: '90%',
    minWidth: '80%',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 150,
  },
  buttonOpen: {
    backgroundColor: colors.borderLight,
  },
  buttonClose: {
    backgroundColor: colors.textBlue,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  otpButton: {
    height: 2,
    width: 280,
    marginHorizontal: 10,
    backgroundColor: colors.textBlue,
  },
  modalTextinput: {
    color: colors.black,
    fontSize: 15,
    marginHorizontal: 10,
  },
  indianCode: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default Mymodal;
