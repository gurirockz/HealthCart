import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  mobileBox: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  mobilecodeText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  mobileText: {
    color: colors.black,
    fontSize: 15,
    marginHorizontal: 20,
  },
  marginBlue: {
    height: 2,
    width: 350,
    marginHorizontal: 30,
    backgroundColor: colors.textBlue,
  },
  corporateAccount: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.textBlue,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  insuranceText: {
    color: colors.textBlue,
    margin: 8,
  },
  arrowIcon: {
    width: 15,
    height: 10,
    tintColor: colors.textBlue,
  },
  termsText: {
    fontSize: 12,
    color: colors.textGreyLight,
    marginLeft: 45,
  },
  termsCondition: {
    fontSize: 12,
    color: colors.textBlue,
  },
});

export default styles;
