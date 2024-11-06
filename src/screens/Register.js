import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mobile, setMobile] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <LottieView
        source={require('../../Lottie/Register.json')}
        autoPlay
        loop
        speed={1}
        style={{width: 40, height: 40, top: 70, marginLeft: 25}}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.content}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="mail" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter Email ID"
              selectionColor="#3662AA"
              onChangeText={setEmail}
              value={email}
              placeholderTextColor="#7C808D"
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="lock" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              selectionColor="#3662AA"
              secureTextEntry={!passwordVisible}
              onChangeText={setPass}
              value={pass}
              placeholderTextColor="#7C808D"
            />
            <TouchableOpacity
              style={styles.passwordVisibleButton}
              onPress={() => setPasswordVisible(!passwordVisible)}>
              <Feather
                name={passwordVisible ? 'eye' : 'eye-off'}
                size={20}
                color="#7C808D"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              <Feather name="phone" size={22} color="#7C808D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              selectionColor="#3662AA"
              onChangeText={setMobile}
              value={mobile}
              placeholderTextColor="#7C808D"
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Register</Text>
          </TouchableOpacity>

          {/* Rest of your code */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#F65532',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: '#eee',
    fontSize: 16,
  },
  passwordVisibleButton: {
    position: 'absolute',
    right: 0,
  },
  loginButton: {
    backgroundColor: '#F65532',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
