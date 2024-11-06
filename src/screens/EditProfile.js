import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, ToastAndroid } from 'react-native';
import { TextInput, Button, Avatar, Title, ActivityIndicator } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const navigation=useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setaddress] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImagePicker = () => {
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
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  const handleSave = () => {
    setLoading(true);
    // Simulate a save operation
    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show(
        'Saved',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        35,50
      )
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <AntDesign
            name="arrowleft"
            size={30}
            color={'black'}
            onPress={() => navigation.navigate('Profile')}
            style={{marginRight:'auto'}}
          />
        <Avatar.Image
          size={100}
          source={profileImage ? { uri: profileImage } : require('../../assets/banners/avatar.jpg')}
        />
        <Button onPress={handleImagePicker}>Change Profile Picture</Button>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          label="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TextInput
          label="Address"
          value={address}
          onChangeText={text => setaddress(text)}
          multiline
          style={styles.input}
        />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button mode="contained" onPress={handleSave} style={styles.button}>
            Save Changes
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  form: {
    flex: 1,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
});

export default EditProfile;
