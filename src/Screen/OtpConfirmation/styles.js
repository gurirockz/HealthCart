import {StyleSheet, Platform} from 'react-native';
import colors from '../../styles/colors';

export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 8;

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: colors.textBlue,
    backgroundColor: colors.white,

    // IOS
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    padding: 20,
    margin: 20,
    borderRadius: 15,
    backgroundColor: colors.white,
    flex: 1,
    borderWidth: 2,
    borderColor: colors.lightGreyBg,
  },
  title: {
    paddingTop: 50,
    color: colors.black,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: colors.black,
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 15,
    height: 45,
    backgroundColor: colors.textBlue,
    justifyContent: 'center',
    width: 150,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.white,
    fontWeight: '700',
  },
  mainView: {
    backgroundColor: colors.textBlue,
    flex: 1,
  },
});

export default styles;
