import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Card, Searchbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import StarRating from '../../../component/StartRating';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Restaurant = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState({});

  const handleFavoriteToggle = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const restaurantData = [
    {
      id: 1,
      name: 'RajNandini Restaurant',
      image: require('../../../assets/banners/biriyani-1.jpg'),
      rating: 4,
      reviews: 99,
      description: 'Best Biriyani in the habra',
      distance: 'Post office Rd 2.5km',
    },
    // Add more restaurant items as needed
    {id: 2,
      name: 'RajNandini Restaurant',
      image: require('../../../assets/banners/biriyani-2.jpg'),
      rating: 4,
      reviews: 99,
      description: 'Best Biriyani in the habra',
      distance: 'Post office Rd 2.5km',},
      {id: 3,
        name: 'RajNandini Restaurant',
        image: require('../../../assets/banners/biriyani-3.jpg'),
        rating: 4,
        reviews: 99,
        description: 'Best Biriyani in the habra',
        distance: 'Post office Rd 2.5km',},
      {id: 4,
        name: 'RajNandini Restaurant',
        image: require('../../../assets/banners/biriyani-4.jpg'),
        rating: 4,
        reviews: 99,
        description: 'Best Biriyani in the habra',
        distance: 'Post office Rd 2.5km',},
      {id: 5,
        name: 'RajNandini Restaurant',
        image: require('../../../assets/banners/biriyani-5.jpg'),
        rating: 4,
        reviews: 99,
        description: 'Best Biriyani in the habra',
        distance: 'Post office Rd 2.5km',},
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headericon}>
        <AntDesign
          name="arrowleft"
          size={30}
          color={'black'}
          onPress={() => navigation.navigate('Home')}
        />
        <Entypo name="share" size={30} color={'black'} />
      </View>
      <View style={styles.searchbar}>
        <Searchbar
          placeholder="Search your food destination..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.swipe}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.v1}>
            <Image
              source={require('../../../assets/banners/food-2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage1}
            />
          </View>
          <View style={styles.v1}>
            <Image
              source={require('../../../assets/banners/flat-2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage1}
            />
          </View>
          <View style={styles.v1}>
            <Image
              source={require('../../../assets/banners/flat-3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage1}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.divider} />
      <View
        style={styles.reslist}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 10,
          }}>
          Restaurant to Explore (10)
        </Text>
      </View>
      {restaurantData.map((restaurant, index) => (
        <View key={restaurant.id} style={styles.main}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handleFavoriteToggle(index)}>
              <Card.Cover
                source={restaurant.image}
                style={{ height: 150, width: 150, marginLeft: 15, marginTop: 10 }}
              />
              <AntDesign
                name={favorites[index] ? 'heart' : 'hearto'}
                size={20}
                color={favorites[index] ? 'red' : 'white'}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
            <Card.Content style={styles.incard1}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                {restaurant.name}
              </Text>
              <StarRating ratings={restaurant.rating} reviews={restaurant.reviews} />
              <Text>{restaurant.description}</Text>
              <Text>{restaurant.distance}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <MaterialIcons name="delivery-dining" size={25} color="#8803fc" />
                <Text style={{ marginLeft: 10, fontWeight: 'bold', color: '#8803fc' }}>
                  Free Delivery
                </Text>
              </View>
            </Card.Content>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    marginTop: 15,
    borderRadius: 50,
  },
  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 15,
  },
  swipe: {
    height: 100,
    width: '90%',
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  v1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  sliderImage1: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginHorizontal: 10,
    marginTop: 20,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  incard1: {
    marginBottom: 15,
  },
  favoriteIcon: {
    position: 'absolute',
    marginTop: 15,
    marginLeft: 140,
  },
});
