import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
const Cart = ({navigation}) => {
  // Cart items (Initially an empty array, which means the cart is empty)
  const [cartItems, setCartItems] = useState([]);

  // This function renders each cart item
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <AntDesign
            name="arrowleft"
            size={30}
            color={'black'}
            onPress={() => navigation.navigate('Home')}
            style={{position:'absolute', top:5, left:5}}
          />
          {/* <Entypo name="share" size={30} color={'black'} onPress={shareWhatsapp}/> */}
       
      {cartItems.length === 0 ? (
        // When the cart is empty, show the "Your cart is empty" message
        <View style={styles.emptyCartContainer}>
          <Image
            source={require('../../assets/banners/shopping.png')}
            // resizeMode='cover'
            style={styles.sliderImage1}
          />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      ) : (
        // When there are items in the cart, display them in a list
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    marginTop: 10,
    color: 'gray',
  },
  sliderImage1: {
    height:200,
    width:200,
    resizeMode: 'contain',
    backgroundColor:'orange',
    borderRadius:45
    
  },
  cartItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  
});
