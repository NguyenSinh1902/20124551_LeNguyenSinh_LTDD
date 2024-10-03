import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tuan6_4a from './screen/Tuan6_4a'; // Đảm bảo rằng đường dẫn đúng
import Tuan6_4b from './screen/Tuan6_4b'; // Đảm bảo rằng đường dẫn đúng

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CÁC MÀN HÌNH TUẦN 6</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tuan6_4a')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Đi đến Tuan6_4a</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tuan6_4b')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Đi đến Tuan6_4b</Text>
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
        <Stack.Screen name="Tuan6_4b" component={Tuan6_4b} />
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
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
