import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput,
  Switch
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../../component/StartRating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import LottieView from 'lottie-react-native';

const Home = ({navigation,cartCount}) => {
  const {colors} = useTheme();
  const[open ,setopen]=useState(false)
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const[loading,setloading]=useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  

  const handleSearch = () => {
    setIsSearchOpen(true);
    // setIsSearchOpen(false)
    // You can perform any additional actions related to search here
    // For example, fetching search results from an API
    // Then update searchResults state accordingly
    // setSearchResults(filteredResults);
  };
  

  const handleRes=()=>{
    navigation.navigate('Restaurant')
  }
  const handleFast=()=>{
    navigation.navigate('Fastfood')
  }
  const handleSnack=()=>{
    navigation.navigate('Snacks')
  }
  const handlehotel=()=>{
    navigation.navigate('Hotels')
  }
  const handleDine=()=>{
    navigation.navigate('Dineout')
  }
  const handleSeeMore=()=>{
    navigation.navigate('SeeMore')
  }
  return (
    <ScrollView style={styles.container}>
      {/* <Switch value={open} onValueChange={setopen} /> */}
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <LottieView
          source={require('../../Lottie/chef.json')}
          autoPlay
          loop
          speed={1.5}
          style={{width: 90, height: 60, marginTop: 1, marginRight: 150}}
        />
        <Text style={styles.headerText}>Food Finder</Text>
        <TouchableOpacity onPress={handleSearch} style={styles.icon}>
          <AntDesign name="search1" size={20} color="black" />
        </TouchableOpacity>

        <FontAwesome6
          name="user-circle"
          size={25}
          color="black"
          style={styles.icon1}
          onPress={() => navigation.navigate('Profile')}
        />
        <FontAwesome6
          name="cart-shopping"
          size={22}
          color="orange"
          style={styles.icon2}
          onPress={() => navigation.navigate('Cart')}
        />
        {cartCount > 0 && (
            <View
              style={{
                position: 'absolute',
                top: -10,
                right: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                padding: 5,
              }}>
              <Text style={{ color: 'red', fontSize: 10 }}>{cartCount}</Text>
            </View>
          )}
        {/* <Text style={styles.logout}>Logout</Text> */}
      </View>
      {isSearchOpen && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search your  favorite dish..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {/* You can display search results here */}
          {searchResults.map(result => (
            <Text>{result}</Text>
          ))}
        </View>
      )}
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../../assets/banners/food-banner1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>handleRes()}>
          <View style={styles.categoryIcon}>
            <Ionicons name="restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => handleFast()}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => handleSnack()}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => handlehotel()}>
          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => handleDine()}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Dineouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() =>handleSeeMore()}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="expand-more" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Show More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            bottom: 5,
          }}>
          Try Something New
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Places</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              {' '}
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Places</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              {' '}
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/banners/food-banner4.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Places</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              {' '}
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
    fontSize: 12,
  },
  header: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#111211',
    fontSize: 20,
    position: 'absolute',
    // fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    right: 60,
  },
  icon1: {
    position: 'absolute',
    left: 20,
  },
  icon2: {
    position: 'absolute',
    right: 20,
  },
  logout: {
    position: 'absolute',
    right: 17,
    fontSize: 10,
    top: 35,
    color: 'red',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#de4f35',
    marginVertical: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 5,
    borderColor:'#ffd9b3',
    borderWidth:1
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
  },
});
