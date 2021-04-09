import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 60,
    backgroundColor: colors.white,
  },
  mainView1: {flexDirection: 'row', justifyContent: 'flex-start'},
  cartView: {color: colors.red, fontWeight: 'bold'},
  imageView: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  marginHorizontal15: {
    marginHorizontal: 15,
  },
  mainView3: {backgroundColor: colors.white},
  name: {marginVertical: 2, marginHorizontal: 20, marginTop: 10},
  cartDetail: {
    marginVertical: 10,
    marginHorizontal: 3,
    width: 40,
    height: 40,
    borderTopWidth: 0.5,
    borderTopColor: colors.white,
    borderLeftWidth: 0.5,
    borderLeftColor: colors.white,
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    borderRightWidth: 2,
    borderRightColor: colors.white,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cartDetail1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 70,
    backgroundColor: 'white',
  },
  cartView: {
    flexDirection: 'row',
    backgroundColor: colors.blue,
    marginHorizontal: 20,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 40,
  },
  textWhite: {
    color: colors.white,
  },
  mainView1: {marginVertical: 2, marginHorizontal: 20, marginTop: 10},
  nameView: {flexDirection: 'row', justifyContent: 'flex-start'},
  priceText: {
    color: colors.textGrey,
    margin: 2,
    fontSize: 12,
    marginHorizontal: 20,
  },
});

export default styles;
