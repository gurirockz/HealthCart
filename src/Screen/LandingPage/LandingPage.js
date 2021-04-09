import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import image from '../../constants/imagePath';
import WrapperContainer from '../../Component/WrapperContainer';
import strings from '../../constants/lang/en';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import colors from '../../styles/colors';

export default class OuterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/carousel_one.png'),
        require('../../assets/images/carousel_one.png'),
        require('../../assets/images/carousel_one.png'),
        require('../../assets/images/carousel_one.png'),
      ],
    };
  }

  render() {
    return (
      <WrapperContainer>
        <View>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={490}
            dotColor={colors.textBlue}
            inactiveDotColor={colors.white}
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            parentWidth={this.state.width}
            backgroundColor={colors.textBlue}
          />
        </View>

        <View style={{marginVertical: 20}}>
          <View style={{marginVertical: 10}}>
            <View style={styles.mobileBox}>
              <Text style={styles.mobilecodeText}>{strings.INDIAN_CODE}</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate(
                    navigationStrings.OTP_VERIFICATION,
                  )
                }>
                <Text style={styles.mobileText}>{strings.ENTER_MOBILE_NO}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.marginBlue} />
          </View>

          <View style={styles.corporateAccount}>
            <Text style={styles.insuranceText}>
              {strings.INSURANCE_CORPORATE}
            </Text>

            <Image
              source={{
                uri: 'https://image.flaticon.com/icons/png/128/54/54833.png',
              }}
              style={styles.arrowIcon}
            />
          </View>

          <Text style={styles.termsText}>
            {strings.TERMS}

            <Text style={styles.termsCondition}>
              {strings.TERMS_CONDITIONS}
            </Text>
          </Text>
        </View>
      </WrapperContainer>
    );
  }
}
