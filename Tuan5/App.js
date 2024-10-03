import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './screen/Screen01.js';
import ColorSelection from './screen/ColorSelection.js'; 

const Blue = require('./Color_iPhone16/Blue.png'); 
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách điện thoại</Text>
      <TouchableOpacity style={styles.productBox} onPress={() => navigation.navigate('Screen01')}>
        <Image source={Blue} style={styles.image} />
        <Text style={styles.phoneName}>Điện thoại iPhone 16</Text>
        <Text style={styles.price}>21.850.000 VND</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang Chủ' }} />
        <Stack.Screen name="Screen01" component={Screen01} options={{ title: 'Chi tiết sản phẩm' }} />
        <Stack.Screen name="ColorSelection" component={ColorSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productBox: {
    width: 250,
    height: 300,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  phoneName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'red',
  },
});

export default App;
