import navigationStrings from '../../constants/navigationStrings';
import {Animated, Image, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import colors from '../../styles/colors';

import styles, {CELL_SIZE, CELL_BORDER_RADIUS} from './styles';

import {TouchableOpacity} from 'react-native-gesture-handler';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 4;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const OtpConfirmation = props => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propsCell, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [colors.textBlue, colors.textBlue],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [colors.lightGreyBg, colors.lightGreyBg],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.root}>
          <Text style={styles.title}>Enter 4 digit OTP</Text>
          <Text style={styles.subTitle}>
            Please enter the verification code
          </Text>

          <CodeField
            ref={ref}
            {...propsCell}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
          <View style={{flexDirection: 'row-reverse'}}>
            <View style={styles.nextButton}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate(navigationStrings.LOGIN_MEDI)
                }>
                <Text style={styles.nextButtonText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default OtpConfirmation;
