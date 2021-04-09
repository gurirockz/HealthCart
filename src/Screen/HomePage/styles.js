import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  itemImage: {
    height: 150,
    marginLeft: 20,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  forlogoHeading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    maxHeight: 50,
    borderRadius: 12,
    marginLeft: 32,
  },
  inputField: {
    padding: 8,
  },
  header: {
    flex: 1.2,
    backgroundColor: colors.blue,
    justifyContent: 'space-around',
  },
  mainView: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 20,
    paddingBottom: 10,
    borderColor: colors.white,
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  imageView: {
    height: 150,
    marginLeft: 20,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  originalPrice: {
    color: colors.textGrey,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  discountText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  textBlue: {
    padding: 10,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: colors.textBlue,
    borderRadius: 15,
  },
  mainView5: {
    height: 13,
    width: 13,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    right: 20,
    top: -1,
  },
  button: {
    color: '#1F63F5',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
});
