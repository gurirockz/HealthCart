import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  RefreshControl,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import axiosService from '../../utils/lib/axiosService';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Nodata from '../../Component/Nodata';
import store from '../../redux/store';
import types from '../../redux/types';
import {connect} from 'react-redux';
import styles from '../Cart/styles';
import colors from '../../styles/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import axiosService from '../../utils/lib/axiosService';

const {dispatch} = store;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArray: [
        {
          id: 1,
          name: '1mg Active Nutrition Mix',
          image:
            'https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1610970190/vj18vhjegeuoyvdqocko/1mg-active-nutrition-mix-for-adults-with-whey-protein-vitamin-d-choline-and-high-fiber-vanilla.jpg',
          originalPrice: 'MRP    Rs 2599',
          reducedPrice: 2200,
          quantity: 1,
        },
        {
          id: 2,
          name: 'ENSURE Peptide Powder',
          image:
            'https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1610526711/mkukel3bqtlck7x7sizw/ensure-peptide-powder-vanilla.jpg',
          originalPrice: 'MRP    Rs 2799',
          reducedPrice: 2100,
          quantity: 1,
        },
        {
          id: 3,
          name: 'ORGANIC INDIA',
          image:
            'https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1601035207/cropped/iuzrkjdew8thbeqgzdqm/organic-india-ashwagandha-veg-capsule.jpg',
          originalPrice: 'MRP    Rs 1599',
          reducedPrice: 1100,
          quantity: 1,
        },
        {
          id: 4,
          name: 'Winter care combo',
          image:
            'https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1605158699/snwkmgvhic8qk0kg7ruw/winter-care-combo-of-dr-morepen-cn-10-compressor-nebuliser-and-dr-morepen-vp-06-breathe-free-vaporizer.jpg',
          originalPrice: 'MRP    Rs 2999',
          reducedPrice: 2250,
          quantity: 1,
        },
        {
          id: 5,
          name: '1mg Active Nutrition Mix',
          image:
            'https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1610970190/vj18vhjegeuoyvdqocko/1mg-active-nutrition-mix-for-adults-with-whey-protein-vitamin-d-choline-and-high-fiber-vanilla.jpg',
          originalPrice: 'MRP    Rs 2599',
          reducedPrice: 2200,
          quantity: 1,
        },
        {
          id: 6,
          name: 'ENSURE Peptide Powder',
          image:
            'https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1610526711/mkukel3bqtlck7x7sizw/ensure-peptide-powder-vanilla.jpg',
          originalPrice: 'MRP    Rs 2799',
          reducedPrice: 2100,
          quantity: 1,
        },
        {
          id: 7,
          name: 'ORGANIC INDIA',
          image:
            'https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1601035207/cropped/iuzrkjdew8thbeqgzdqm/organic-india-ashwagandha-veg-capsule.jpg',
          originalPrice: 'MRP    Rs 1599',
          reducedPrice: 1100,
          quantity: 1,
        },
        {
          id: 8,
          name: 'Winter care combo',
          image:
            'https://res.cloudinary.com/du8msdgbj/images/w_150,h_150,c_fit,q_auto,f_auto/v1605158699/snwkmgvhic8qk0kg7ruw/winter-care-combo-of-dr-morepen-cn-10-compressor-nebuliser-and-dr-morepen-vp-06-breathe-free-vaporizer.jpg',
          originalPrice: 'MRP    Rs 2999',
          reducedPrice: 2250,
          quantity: 1,
        },
      ],
    };
  }

  _onPress = item => {
    dispatch({
      type: types.PRODUCT_DETAILS,
      payload: {item},
    });

    this.props.navigation.navigate('Details');
  };

  _onAddToCart = item => {
    const {productsArray} = this.state;

    let blankcartArray = [...productsArray];

    dispatch({
      type: types.ADD_TO_CART,
      payload: {blankcartArray, item},
    });
  };

  _onclicktocart = () => {
    const {productsArray} = this.state;
    this.props.navigation.navigate('Cart');
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.mainView}>
        <TouchableOpacity onPress={() => this._onPress(item)}>
          <Image source={{uri: item.image}} style={styles.imageView} />
        </TouchableOpacity>
        <View>
          <Text>{item.name}</Text>
        </View>
        <View>
          <Text>{item.text}</Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
        </View>
        <Text>{item.reducedPrice}</Text>

        <View style={styles.discountText}>
          <Text>{item.discount}</Text>
        </View>
        <TouchableOpacity onPress={() => this._onAddToCart(item)}>
          <View style={styles.textBlue}>
            <Text>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {productsArray} = this.state;
    const {cart_Array} = this.props;
    let {data, refreshing} = this.state;

    return (
      <SafeAreaView>
        <StatusBar
          animated={true}
          backgroundColor={colors.blue}
          hidden={false}
        />
        <View>
          <View style={styles.header}>
            <View style={styles.forlogoHeading}>
              <Feather
                name="menu"
                size={25}
                style={styles.iconSpacing}
                color={colors.whiteOpacity22}
              />

              <Image source={require('../../assets/images/mb.png')} />

              <AntDesign
                name="down"
                size={15}
                style={styles.iconSpacing}
                color={colors.white}
              />

              <View style={styles.mainView5}>
                <Text style={styles.button}>{cart_Array.length}</Text>
              </View>

              <TouchableOpacity onPress={this._onclicktocart}>
                <AntDesign
                  name="shoppingcart"
                  size={25}
                  style={styles.iconSpacing}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.textInput}>
              <TextInput
                style={styles.inputField}
                placeholder="Search medicines and health products"></TextInput>
              <EvilIcons name="search" size={25} color={colors.textBlue} />
            </View>
          </View>

          <View>
            {productsArray.length > 0 ? (
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={this.onRefresh}
                  />
                }
                keyExtractor={item => item.id.toString()}
                data={productsArray}
                renderItem={this.renderItem}
                numColumns="2"
                style={{padding: 10}}
              />
            ) : (
              <Nodata data="Homepage" />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart_Array: state.home.cart_array,
  };
};

export default connect(mapStateToProps)(HomePage);
