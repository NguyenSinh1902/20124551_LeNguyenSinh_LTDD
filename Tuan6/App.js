import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tuan6_4a from './screen/Tuan6_4a.js'; // Đảm bảo đường dẫn đúng

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CÁC MÀN HÌNH TUẦN 6</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tuan6_4a')}
        activeOpacity={0.7} // Hiệu ứng nhấn
      >
        <Text style={styles.buttonText}>Đi đến Tuan6_4a</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tuan6_4a" component={Tuan6_4a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4682b4',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 5, // Tạo bóng cho nút
    shadowColor: '#000', // Màu bóng
    shadowOffset: { width: 0, height: 2 }, // Độ nghiêng của bóng
    shadowOpacity: 0.3, // Độ mờ của bóng
    shadowRadius: 3, // Đường kính bóng
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Căn giữa văn bản
  },
});
