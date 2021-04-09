import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

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
    backgroundColor: colors.white,
  },
  buttonClose: {
    backgroundColor: colors.textBlue,
  },
  textStyle: {
    color: colors.white,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: colors.black,
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.textBlue,
    padding: 30,
  },
  paddedBox: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 10,
  },
  heading: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  information: {fontSize: 18, color: colors.black},
  inputText: {
    color: colors.black,
    fontSize: 15,
    marginHorizontal: 10,
  },
  blueMargin: {
    height: 2,
    width: 300,
    marginHorizontal: 10,
    backgroundColor: colors.textBlue,
    marginBottom: 30,
  },
  buttonLogin: {flexDirection: 'row', justifyContent: 'flex-end'},
});

export default styles;
