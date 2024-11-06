import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Card, Searchbar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Dineout = ({handleAddToCart}) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFoodList, setShowFoodList] = useState(true);
  const foodList = [
    {
      id: 1,
      name: 'Food 1',
      description: 'Description for Food 1',
      image: require('../../../assets/banners/cake-1.jpg'),
    },
    {
      id: 2,
      name: 'Food 2',
      description: 'Description for Food 2',
      image: require('../../../assets/banners/cake-2.jpg'),
    },
    {
      id: 3,
      name: 'Food 3',
      description: 'Description for Food 3',
      image: require('../../../assets/banners/cake-3.jpg'),
    },
    // Add more food items as needed
  ];

  return (
    <ScrollView>
      <View
        style={{
          height: 300,
          backgroundColor: '#B0C4DE',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <AntDesign
            name="arrowleft"
            size={30}
            color={'black'}
            onPress={() => navigation.navigate('Home')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="search1" size={22} color="black" />
            <Text style={{fontSize: 16, fontWeight: '600', marginLeft: 7}}>
              Search
            </Text>
          </View>
        </View>
        <View>
          <Card style={styles.card1}>
            <View>
              <MaterialIcons
                name="stars"
                size={20}
                color={'green'}
                style={{marginLeft: 'auto', marginRight: 35, top: 20}}
              />
              <Text
                style={{
                  marginLeft: 'auto',
                  marginRight: 20,
                  fontSize: 10,
                  top: 15,
                  color: 'grey',
                }}>
                1k+ ratings
              </Text>
            </View>

            <Card.Content style={{bottom: 15}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                Mio Amore -The Cake{'\n'}shop
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                15-20 minutes - Ashoknagar
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: 'grey',
                  marginTop: 25,
                }}>
                Bakery & Deserts
              </Text>
              <View style={styles.divider}></View>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="bicycle"
                  size={20}
                  color="orange"
                  style={{marginTop: 10}}
                />
                <Text style={{marginTop: 9, marginLeft: 10}}>
                  0.5 km | $X7 Free Delivery on your order
                </Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 15,
            color: 'black',
          }}>
          MENU
        </Text>
        <View style={styles.divider} />
        <View style={styles.searchbar}>
          <Searchbar
            placeholder="Search for dishes..."
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
      </View>
      <View>
      <TouchableOpacity
          style={styles.reslist}
          onPress={() => setShowFoodList(!showFoodList)}>
          <Text style={styles.reslistText}>Cakes (10)</Text>
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
                <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
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

      </View>
    </ScrollView>
  );
};

export default Dineout;

const styles = StyleSheet.create({
  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 15,
  },
  card1: {
    width: 330,
    alignSelf: 'center',
    height: 200,
    marginTop: 30,
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 1,
    marginTop: 25,
  },
  searchbar: {
    marginTop: 15,
    borderRadius: 50,
    width: '90%',
    alignSelf: 'center',
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
});
