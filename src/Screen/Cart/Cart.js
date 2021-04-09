import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Nodata from '../../Component/Nodata';
import {connect} from 'react-redux';
import styles from './styles';
import colors from '../../styles/colors';
import actions from '../../redux/actions';
import {clearUserData} from '../../utils/utils';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    limit: 10,
    skip: 0,
    data: [],
    isLoading: true,
    noMoreData: false,
    refreshing: false,
    isLoadingData: true,
  };

  getData = () => {
    let {skip, data} = this.state;
    this.setState({isLoading: true});

    actions
      .infiniteData({
        searchType: 'LEADERBOARD',
        limit: `${limit}`,
        skip: `${skip}`,
      })
      .then(res => {
        if (res.data.length) {
          let updateData = [...data];
          this.setState({
            data: [...updateData, ...res.data],
            isLoading: false,
            skip: skip + 10,
          });
          console.log(res.data);
        } else {
          this.setState({
            noMoreData: true,
            isLoadingData: false,
            isLoading: false,
          });
        }
      })
      .catch(err => {
        if (err.statusCode == 401) {
          clearUserData();
        }
        this.setState({isLoading: false});
      });
  };

  componentDidMount = () => {
    this.setState({isLoading: true});
    this.getData();
  };

  _handleLoadMore = () => {
    let {noMoreData, isLoadingData} = this.state;
    if (!isLoadingData || noMoreData) {
      return;
    }
    this.getData();
  };

  renderItem = ({item, index}) => {
    return (
      <View style={styles.mainView}>
        <View style={styles.paddedView}>
          <Image source={{uri: item.image}} style={styles.productImage} />
        </View>
        <View style={styles.paddedView2}>
          <View style={styles.horizontalLine}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          <View style={styles.horizontalLine}>
            <Text>{item.text}</Text>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>
              {item.quantity * item.reducedPrice}
            </Text>
            <Text style={styles.priceText1}>{item.originalPrice}</Text>
            <Text style={styles.priceText2}>{item.discount} OFF</Text>
          </View>
          <View style={styles.paddedView3}>
            <TouchableOpacity
              onPress={() => this.quantityHandler('less', index)}
              style={styles.button}>
              <MaterialIcons
                name="remove"
                size={22}
                color={colors.textGreyLight}
              />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => this.quantityHandler('more', index)}
              style={styles.button}>
              <MaterialIcons
                name="add"
                size={22}
                color={colors.textGreyLight}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  quantityHandler = (action, index) => {
    const {cart_Array = []} = this.props;

    const newItems = [...cart_Array];

    let currentQty = newItems[index]['quantity'];

    if (action == 'more') {
      newItems[index]['quantity'] = currentQty + 1;
    } else if (action == 'less') {
      newItems[index]['quantity'] = currentQty > 1 ? currentQty - 1 : 1;
    }

    this.setState({cart_Array: newItems});
  };

  subtotalPrice = () => {
    const {cart_Array = []} = this.props;
    if (cart_Array) {
      return cart_Array.reduce(
        (sum, item) => sum + item.quantity * item.reducedPrice,
        0,
      );
    }
    return 0;
  };

  onRefresh = () => {
    this.setState({refreshing: false, noMoreData: false});
  };

  _onEndReached = () => {
    const {noMoreData, isLoadingData} = this.state;
    if (noMoreData || isLoadingData) {
      return;
    }

    this.setState({isLoadingMore: true});
    this.getData(true);
  };

  renderFooter = () => {
    const {isLoadingData} = this.state;
    if (isLoadingData) {
      return (
        <View style={{paddingBottom: 40}}>
          <ActivityIndicator color="red" size="large" />
        </View>
      );
    }
    return <View style={{height: 50}} />;
  };

  render() {
    const {cart_Array = []} = this.props;
    let {data, refreshing} = this.state;
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.homeView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Entypo name="cross" size={30} />
          </TouchableOpacity>

          <Text style={styles.cartStyle}>My Cart</Text>
        </View>
        <Text style={styles.orderText}>Your Order</Text>

        {cart_Array.length > 0 ? (
          <View style={styles.flatView}>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.onRefresh}
                />
              }
              keyExtractor={item => item.id.toString()}
              data={cart_Array}
              renderItem={this.renderItem}
            />
          </View>
        ) : (
          <View style={styles.mainView2}>
            <Nodata data="Cart" />
          </View>
        )}

        <View style={styles.mainView3}>
          <View style={styles.mainView4}>
            <Text>Estimated Amount</Text>
            <Text style={styles.priceText}>{this.subtotalPrice()}</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('confirm', {data: data})
            }>
            <View style={styles.mainView5}>
              <Text style={styles.proceedText}>Proceed</Text>
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
  };
};

export default connect(mapStateToProps)(Cart);
