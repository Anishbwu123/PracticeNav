import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  ToastAndroid
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useNavigation } from '@react-navigation/native';

const Login = ({navigation}) => {
 
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
  });
  // const Nav=useNavigation();
  // console.log(Nav);
  console.log(navigation);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image
          source={require('../../assets/banners/logo.png')}
          style={styles.img}
        />
      </View>
      <Formik
        initialValues={{phoneNumber: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('Form submitted with values:', values);
          // Handle login logic here
          navigation.navigate('HomeScreen');
          ToastAndroid.show(
            'Succesfully login',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            35,50
          )
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{marginTop: 20}}>
            <Animated.Text
              entering={FadeInUp.damping(30).duration(1000).delay(100)}
              style={styles.heading}>
              Login to your App
            </Animated.Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Registered Mobile No."
              placeholderTextColor="#707070"
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
            />
            {errors.phoneNumber && (
              <Text style={styles.errorText}>{errors.phoneNumber}</Text>
            )}
            <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.registertxt}>
        <Text
          style={{color: 'black', fontSize: 15}}
          onPress={() => navigation.navigate('Register')}>
          Don't have an account!! Register Now
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  img: {
    height: '50%',
    width: '100%',
    resizeMode: 'center',
    marginTop: 50,
  },
  maintxt: {
    alignSelf: 'center',
    marginTop: -10,
  },
  heading: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 23,
    alignSelf: 'center',
    marginTop: -80,
    color: '#F65532',
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    height: 45,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: '#000',
    backgroundColor: '#f0f6fc',
    fontSize: 18,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#F65532',
    alignSelf: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registertxt: {
    alignItems: 'center',
    marginTop: 15,
  },
  errorText:{
    color: 'red',
    fontSize: 14,
    alignSelf: 'center',
  }
});
