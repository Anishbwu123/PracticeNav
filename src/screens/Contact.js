import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';

const Contact = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    ToastAndroid.show(
        'Sent Successfully',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        35,50
      )
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.header}>
          <AntDesign
            name="arrowleft"
            size={30}
            color={'black'}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Contact Us</Text>
        </View>
        <Card style={styles.card}>
          <Card.Title title="Get in Touch" />
          <Card.Content>
            <TextInput
              label="Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
            />
            <TextInput
              label="Message"
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={5}
              style={[styles.input, styles.textArea]}
            />
            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Submit
            </Button>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Contact Information" />
          <Card.Content>
            <View style={styles.contactRow}>
              <AntDesign name="home" size={24} color="black" />
              <Text style={styles.contactText}>123 Main Street, Springfield</Text>
            </View>
            <View style={styles.contactRow}>
              <AntDesign name="phone" size={24} color="black" />
              <Text style={styles.contactText}>+1 234 567 890</Text>
            </View>
            <View style={styles.contactRow}>
              <AntDesign name="mail" size={24} color="black" />
              <Text style={styles.contactText}>contact@company.com</Text>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  card: {
    margin: 10,
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  textArea: {
    height: 100,
  },
  button: {
    marginTop: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
