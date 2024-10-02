import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screen/FirstScreen';
import ScreenB from './screen/1_b';
import ScreenC from './screen/1_c';
import ScreenD from './screen/1_d';
import ScreenE from './screen/1_e';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CÁC MÀN HÌNH TUẦN 3</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FirstScreen')}
      >
        <Text style={styles.buttonText}>Đi đến 1_a</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScreenB')}
      >
        <Text style={styles.buttonText}>Đi đến 1_b</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScreenC')}
      >
        <Text style={styles.buttonText}>Đi đến 1_c</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScreenD')}
      >
        <Text style={styles.buttonText}>Đi đến 1_d</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScreenE')}
      >
        <Text style={styles.buttonText}>Đi đến 1_e</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
        <Stack.Screen name="ScreenD" component={ScreenD} />
        <Stack.Screen name="ScreenE" component={ScreenE} /> 
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
