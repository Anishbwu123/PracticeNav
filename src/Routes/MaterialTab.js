import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home ';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile ';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Wine from '../screens/Wine';

const Tab = createMaterialBottomTabNavigator();

const MaterialTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      activeColor="#FF6347"
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
      barStyle={{backgroundColor: 'red'}}
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Entypo name="notification" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wine"
        component={Wine}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <Entypo name="user" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Feather name="aperture" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  );
};

export default MaterialTab;



const styles = StyleSheet.create({});
