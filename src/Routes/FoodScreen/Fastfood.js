import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  Modal,
  Pressable,
} from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BlurView } from '@react-native-community/blur';
import Share from "react-native-share";

const Fastfood = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFoodList, setShowFoodList] = useState(false);
  const [showFoodList1, setShowFoodList1] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [menuItems, setMenuItems] = useState(['Indian', 'Tandoor', 'Chinease', 'Continental']);
  


  const shareWhatsapp = async () => {
    const shareOptions = {
      title: 'Shared on Whatsapp',
      social: Share.Social.WHATSAPP,
      failOnCancel: false,
      message: 'Here is the menu: [biriyani-1, chow-2]', //it will be dynamic the specific fooditem will be shared in future
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const foodList = [
    {
      id: 1,
      name: 'Food 1',
      description: 'Description for Food 1',
      image: require('../../../assets/banners/rolls-1.jpg'),
    },
    {
      id: 2,
      name: 'Food 2',
      description: 'Description for Food 2',
      image: require('../../../assets/banners/rolls-2.jpg'),
    },
    {
      id: 3,
      name: 'Food 3',
      description: 'Description for Food 3',
      image: require('../../../assets/banners/rolls-3.jpg'),
    },
    // Add more food items as needed
  ];

  const foodlist1 = [
    {
      id: 1,
      name: 'Foodggdsfg 1',
      description: 'Description for Food 1',
      image: require('../../../assets/banners/chow-1.jpg'),
    },
    {
      id: 2,
      name: 'Food 2',
      description: 'Description for Food 2',
      image: require('../../../assets/banners/chow-2.jpg'),
    },
    {
      id: 3,
      name: 'Food 3',
      description: 'Description for Food 3',
      image: require('../../../assets/banners/chow-3.jpg'),
    },
  ];



  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 2000); // Set refreshing to false after 2 seconds
            }}
          />
        }>
        <View style={styles.headericon}>
          <AntDesign
            name="arrowleft"
            size={30}
            color={'black'}
            onPress={() => navigation.navigate('Home')}
          />
          <Entypo name="share" size={30} color={'black'} onPress={shareWhatsapp}/>
        </View>
        <View style={styles.searchbar}>
          <Searchbar
            placeholder="Search your fast food..."
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
        <TouchableOpacity
          style={styles.reslist}
          onPress={() => setShowFoodList(!showFoodList)}>
          <Text style={styles.reslistText}>Rolls (10)</Text>
          <AntDesign
            name={showFoodList ? 'up' : 'down'}
            size={20}
            color={'black'}
            style={{ marginLeft: 'auto', marginRight: 15 }}
          />
        </TouchableOpacity>
        {showFoodList && (
          <View style={styles.foodListContainer}>
            {foodList.map(food => (
              <Card key={food.id} style={styles.foodCard}>
                <Card.Cover
                  source={food.image}
                  style={{
                    height: 150,
                    width: 150,
                    marginLeft: 'auto',
                    marginTop: 10,
                    marginRight: 10,
                  }}
                />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
                <Card.Content>
                  <MaterialCommunityIcons
                    name="square-circle"
                    size={20}
                    color={'green'}
                    style={{ bottom: 130 }}
                  />
                  <View style={styles.carddes}>
                    <Text style={styles.foodName}>{food.name}</Text>
                    <Text style={styles.foodDescription}>{food.description}</Text>
                  </View>
                </Card.Content>
              </Card>
            ))}
          </View>
        )}

        {/* for foodlist1 */}
        <TouchableOpacity
          style={styles.reslist}
          onPress={() => setShowFoodList1(!showFoodList1)}>
          <Text style={styles.reslistText}>Chowmin (10)</Text>
          <AntDesign
            name={showFoodList1 ? 'up' : 'down'}
            size={20}
            color={'black'}
            style={{ marginLeft: 'auto', marginRight: 15 }}
          />
        </TouchableOpacity>
        {showFoodList1 && (
          <View style={styles.foodListContainer}>
            {foodlist1.map(food => (
              <Card key={food.id} style={styles.foodCard}>
                <Card.Cover
                  source={food.image} // corrected
                  style={{
                    height: 150,
                    width: 150,
                    marginLeft: 'auto',
                    marginTop: 10,
                    marginRight: 10,
                  }}
                />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
                <Card.Content>
                  <MaterialCommunityIcons
                    name="square-circle"
                    size={20}
                    color={'green'}
                    style={{ bottom: 130 }}
                  />
                  <View style={styles.carddes}>
                    <Text style={styles.foodName}>{food.name}</Text>
                    <Text style={styles.foodDescription}>{food.description}</Text>
                  </View>
                </Card.Content>
              </Card>
            ))}
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.restaurantName}>SWAD (South Indian Food)</Text>
          <View style={styles.locationContainer}>
            <Entypo
              name="location-pin"
              size={15}
              color={'grey'}
              style={{ marginRight: 5 }}
            />
            <Text>Nagarukhra More Habra Pin-743222</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.menuButton}>
        <MaterialIcons
          style={{ textAlign: 'center' }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>
          MENU
        </Text>
      </Pressable>
      {modalVisible && (
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}
      {/* Display for modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <View style={styles.modalBox}>
              {menuItems.map((item, i) => (
                <View key={i} style={{ marginVertical: 5 }}>
                  <Text style={{fontWeight:'bold',color:'black'}}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Fastfood;

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
  reslist: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 10,
  },
  reslistText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodListContainer: {
    marginTop: 10,
    marginLeft: 10,
    width: '95%',
  },
  foodCard: {
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodDescription: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    right: 50,
    position: 'absolute',
    marginTop: 145,
  },
  addButtonText: {
    color: 'green',
    fontWeight: 'bold',
  },
  carddes: {
    bottom: 100,
  },
  menuButton: {
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 35,
    right: 25,
    alignItems: 'center',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '90%',
    padding: 20,
    
  },
  modalBox: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    backgroundColor:'#fadbcf'
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
