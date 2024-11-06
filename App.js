// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native'
// // import MaterialTab from './src/Routes/MaterialTab'

// const App = () => {
//   return (
//     <View>
//       <Auth/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

import SplashScreen from 'react-native-splash-screen';
import Auth from './src/Routes/AuthStack';
import { useEffect } from 'react';
export default function App(){
  useEffect(()=>{
    SplashScreen.hide()
  })
  return(
   <>
   <Auth/>
   </>
    
   
   
    // D:\Nested\PracticeNav\src\Routes\AuthStack.js
  )
}

