import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tuan4_2a from './screen/Tuan4_2a';
import Tuan4_2b from './screen/Tuan4_2b';
import Tuan4_2c from './screen/Tuan4_2c';
import Tuan4_Tiki_ok from './screen/Tuan4_Tiki_ok';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CÁC MÀN HÌNH TUẦN 4</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tuan4_2a')}
      >
        <Text style={styles.buttonText}>Đi đến Tuan4_2a</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tuan4_2b')}
      >
        <Text style={styles.buttonText}>Đi đến Tuan4_2b</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tuan4_2c')}
      >
        <Text style={styles.buttonText}>Đi đến Tuan4_2c</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tuan4_Tiki_ok')}
      >
        <Text style={styles.buttonText}>Đi đến Tiki_ok.  </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tuan4_2a" component={Tuan4_2a} />
        <Stack.Screen name="Tuan4_2b" component={Tuan4_2b} />
        <Stack.Screen name="Tuan4_2c" component={Tuan4_2c} />
        <Stack.Screen name="Tuan4_Tiki_ok" component={Tuan4_Tiki_ok} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4682b4',
  },
  button: {
    backgroundColor: '#4682b4',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
