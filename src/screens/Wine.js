import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { Card, Searchbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../../component/StartRating';
import { launchImageLibrary } from 'react-native-image-picker';

const Wine = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [modalVisible, setModalVisible] = useState(true); // State for modal visibility
  const [ageVerified, setAgeVerified] = useState(false); // State for age verification
  const [idImage, setIdImage] = useState(null); // State to store the selected ID image

  const handleFavoriteToggle = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleUploadId = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        setIdImage(response.assets[0].uri);
        setLoader(true);
        // Mock age verification (replace with actual logic)
        setTimeout(() => {
          const isOldEnough = true; // Replace with actual age verification logic
          if (isOldEnough) {
            setAgeVerified(true);
            setModalVisible(false);
          } else {
            alert('You do not meet the age criteria.');
          }
          setLoader(false);
        }, 2000); // Simulate a delay for age verification
      }
    });
  };

  const restaurantData = [
    {
      id: 1,
      name: 'RajNandini / Bar',
      image: require('../../assets/banners/beer-1.jpg'),
      rating: 4,
      reviews: 99,
      description: 'Best Vodka in habra',
      distance: 'Post office Rd 2.5km',
    },
    // Add more restaurant items as needed
    {
      id: 2,
      name: 'Surya FL Off',
      image: require('../../assets/banners/beer-2.jpg'),
      rating: 4,
      reviews: 99,
      description: 'Best Scotch in habra',
      distance: 'Jessore Rd 2.5km',
    },
    {
      id: 3,
      name: 'Ashoknagar Fl Off',
      image: require('../../assets/banners/beer-3.jpg'),
      rating: 4,
      reviews: 99,
      description: 'Best Foreign drink in habra',
      distance: 'Building More Rd 2.5km',
    },
    {
      id: 4,
      name: 'Hotel Habra Inn',
      image: require('../../assets/banners/beer-4.jpg'),
      rating: 4,
      reviews: 99,
      description: 'Best liquior in the habra',
      distance: 'Jessore Rd 2.5km',
    },
    {
      id: 5,
      name: 'North Habra Trading',
      image: require('../../assets/banners/beer-5.jpg'),
      rating: 4,
      reviews: 99,
      description: 'Best Indian drink in habra',
      distance: 'Jessore Rd 2.5km',
    },
  ];

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please upload your valid government ID proof to proceed.</Text>
            {loader ? (
              <ActivityIndicator size="large" color="#2196F3" />
            ) : (
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleUploadId}
              >
                <Text style={styles.textStyle}>Upload ID</Text>
              </Pressable>
            )}
          </View>
        </View>
      </Modal>

      {ageVerified && (
        <ScrollView>
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
              placeholder="Search your drink..."
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
                  source={require('../../assets/banners/food-2.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage1}
                />
              </View>
              <View style={styles.v1}>
                <Image
                  source={require('../../assets/banners/flat-2.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage1}
                />
              </View>
              <View style={styles.v1}>
                <Image
                  source={require('../../assets/banners/flat-3.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage1}
                />
              </View>
            </Swiper>
          </View>
          <View style={styles.divider} />
          <View style={styles.reslist}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop: 10,
              }}>
              Bars Near You (10)
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
      )}
    </View>
  );
};

export default Wine;

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
