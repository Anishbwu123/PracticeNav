import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, ProgressBar, Colors } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const Explore = () => {
  const navigation = useNavigation();

  // Mock data for order tracking
  const orderStatus = 'Out for delivery'; // Change this value to reflect different statuses
  const estimatedTime = '45 mins'; // Mock estimated delivery time
  const orderDetails = {
    id: '12345',
    items: [
      { name: 'Vodka', quantity: 1 },
      { name: 'Scotch', quantity: 2 },
    ],
    total: '$120.00',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={30}
          color={'black'}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Track Your Order</Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.orderId}>Order ID: {orderDetails.id}</Text>
          <Text style={styles.status}>Status: {orderStatus}</Text>
          <ProgressBar progress={0.6} color={'orange'} style={styles.progressBar} />
          <Text style={styles.estimatedTime}>Estimated Delivery Time: {estimatedTime}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Order Details" />
        <Card.Content>
          {orderDetails.items.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>x{item.quantity}</Text>
            </View>
          ))}
          <Text style={styles.total}>Total: {orderDetails.total}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Delivery Information" />
        <Card.Content>
          <Text style={styles.deliveryAddress}>178/5 Ashoknagar, Habra</Text>
          <Image
            source={require('../../assets/banners/default-marker.jpg')} // Replace with actual map image or component
            style={styles.mapImage}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default Explore;

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
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    marginTop: 10,
  },
  progressBar: {
    marginTop: 10,
    height: 8,
    borderRadius: 5,
  },
  estimatedTime: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  deliveryAddress: {
    fontSize: 16,
    marginBottom: 10,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
