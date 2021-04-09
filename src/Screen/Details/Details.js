import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import styles from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../styles/colors';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  _onclicktocart = () => {
    this.props.navigation.navigate('Cart');
  };

  _onAddToCart = item => {
    const {productsArray} = this.state;

    let blankcartArray = [...productsArray];

    dispatch({
      type: types.ADD_TO_CART,
      payload: {blankcartArray, item},
    });
  };

  render() {
    const {data, cart_Array = []} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainView}>
          <View style={styles.mainView1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <AntDesign
                name="arrowleft"
                size={30}
                style={styles.marginHorizontal15}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.}>
            <EvilIcons
              name="search"
              size={30}
              style={styles.marginHorizontal10}
            />
            <EvilIcons
              name="heart"
              size={30}
              style={styles.marginHorizontal15}
            />
            <Text style={styles.cartView}>{cart_Array.length}</Text>

            <TouchableOpacity onPress={this._onclicktocart}>
              <AntDesign
                name="shoppingcart"
                size={25}
                style={styles.marginHorizontal10}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View>
            <Image source={{uri: data.image}} style={styles.imageView} />
          </View>

          <View style={styles.mainView3}>
            <View
              style={styles.name}>
              <Text>
                {data.name}
              </Text>
            </View>
            <View>
              <Text>{data.text}</Text>
            </View>

            <View>
              <Text
                style={styles.priceText}>
                {data.reducedPrice}
              </Text>
              <Text
                style={styles.priceText}>
                {data.originalPrice}
              </Text>
              <Text
                style={styles.priceText}>
                {data.discount} OFF
              </Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Text
                style={styles.priceText}>
                Price Inclusive of all taxes.
              </Text>
            </View>
          </View>

          <View>
            <View>
              <Text>
                Color
              </Text>
            </View>
            <View>
              <Text>Black</Text>
            </View>
            <View
              style={styles.cartDetail}></View>
          </View>
   
          <View>
            <View
              style={styles.mainView1}>
              <Text>
                Select Size
              </Text>

              <View
                style={styles.nameView}>
                <View
                  style={styles.cartDetail}>
                  <Text>28</Text>
                </View>

                <View
                  style={styles.cartDetail}>
                  <Text>30</Text>
                </View>

                <View
                  style={styles.cartDetail}>
                  <Text>32</Text>
                </View>

                <View
                  style={styles.cartDetail}>
                  <Text>34</Text>
                </View>
                <View
                  style={styles.cartDetail}>
                  <Text>36</Text>
                </View>

                <View
                  style={styles.cartDetail}>
                  <Text>38</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={styles.cartDetail1}>
          <View
            style={styles.cartDetail}>
            <FontAwesome name="whatsapp" size={30} color={colors.black} />
          </View>
          <View
            style={styles.cartDetail}>
            <EvilIcons name="heart" size={30} />
          </View>

          <TouchableOpacity
            onPress={
              // () => this.props.navigation.navigate("Home")
              data => this._onAddToCart(data)
            }>
            <View
              style={styles.cartView}>
              <AntDesign name="shoppingcart" size={25} color={colors.white} />

              <Text style={styles.textWhite}> {item.Add_To_Cart}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart_Array: state.home.cart_array,
    data: state.home.item,
  };
};

export default connect(mapStateToProps)(Details);
