import React, {useRef, useMemo} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['35%', '50%', '70%'], []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <AntDesign
        name="arrowleft"
        size={30}
        color={'black'}
        onPress={() => navigation.navigate('Home')}
        style={{top: 15, marginRight: 'auto'}}
      />
      <View style={{marginBottom: 250}}>
        <Image
          source={require('../../assets/banners/people.png')}
          style={styles.avatar}
        />
        <View style={styles.nameheader}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            John Smith
          </Text>
        </View>
        <View style={styles.innerhead}>
          <Text style={{marginRight: 100, marginTop: 35}}>Recent Orders</Text>
          <Text style={{marginTop: 35}}>View All</Text>
        </View>
        <View style={styles.innerhead1}>
          <Text style={{color: '#2354f7', marginLeft: 5, marginTop: 15}}>
            14' Medium Pizza
          </Text>
          <Text style={{color: '#2354f7', marginLeft: 240, bottom: 20}}>
            $18
          </Text>
        </View>
        <View style={styles.innerhead1}>
          <Text style={{color: '#2354f7', marginLeft: 5, marginTop: 15}}>
            14' Medium Pizza
          </Text>
          <Text style={{color: '#2354f7', marginLeft: 240, bottom: 20}}>
            $18
          </Text>
        </View>
        <View style={styles.innerhead1}>
          <Text style={{color: '#2354f7', marginLeft: 5, marginTop: 15}}>
            14' Medium Pizza
          </Text>
          <Text style={{color: '#2354f7', marginLeft: 240, bottom: 20}}>
            $18
          </Text>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={{backgroundColor: 'grey'}}
        style={{
          shadowColor: '#000',
          shadowRadius: 10,
          shadowOpacity: 0.8,
          elevation: 5,
        }}>
        <View style={[styles.contentContainer, styles.shadow]}>
          <TouchableOpacity style={styles.row}>
            <MaterialIcons
              name="payments"
              size={40}
              color="blue"
              style={styles.icon}
            />
            <Text style={styles.label}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <MaterialIcons
              name="delivery-dining"
              size={40}
              color="orange"
              style={styles.icon}
            />
            <Text style={styles.label}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <MaterialIcons
              name="subscriptions"
              size={40}
              color="red"
              style={styles.icon}
            />
            <Text style={styles.label}>Meal Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <MaterialIcons
              name="question-mark"
              size={40}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.label}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Contact')}
            style={styles.row}>
            <AntDesign
              name="contacts"
              size={40}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.label}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.row}>
            <MaterialCommunityIcons
              name="account"
              size={40}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.label}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.row}>
            <AntDesign
              name="logout"
              size={40}
              color={'#85040d'}
              style={styles.icon}
            />
            <Text style={styles.label}>Logout</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6f9ff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginTop: 50,
    alignSelf: 'center',
  },
  nameheader: {
    alignSelf: 'center',
    marginTop: 15,
  },
  innerhead: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  innerhead1: {
    width: '80%',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#84e8f0',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
