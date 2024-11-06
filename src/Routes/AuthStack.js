import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Restaurant from './FoodScreen/Restaurant';
import Fastfood from './FoodScreen/Fastfood';
import SnacksCorner from './FoodScreen/SnacksCorner';
import Hotels from './FoodScreen/Hotels';
import Dineout from './FoodScreen/Dineout';


import NotificationScreen from '../screens/Notification';
import Explore from '../screens/Explore';
import Wine from '../screens/Wine';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Profile from '../screens/Profile ';
import Home from '../screens/Home ';
import Contact from '../screens/Contact';
import EditProfile from '../screens/EditProfile';
import Cart from '../screens/Cart';
import SeeMore from '../screens/SeeMore';

function WineTab() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000); // Show the text for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {showText ? (
        <View>
          <Image source={require('../../assets/banners/wine.jpeg')} style={{ height: 100, width: 100, borderRadius: 50, alignSelf: 'center' }} />
          <Text style={styles.text}>Bring the party to your home</Text>
          <ProgressBar progress={0.5} color={MD3Colors.error50} />
        </View>
      ) : (
        <Wine />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={NotificationScreen}
        options={{
          title: 'Updates',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wine"
        component={WineTab}
        options={{
          title: 'WineShop',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="wine-bottle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: 'Orders',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="truck-delivery-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Auth() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Fastfood" component={Fastfood} />
        <Stack.Screen name="Snacks" component={SnacksCorner} />
        <Stack.Screen name="Hotels" component={Hotels} />
        <Stack.Screen name="Dineout" component={Dineout} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="SeeMore" component={SeeMore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
