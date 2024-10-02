import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ScreenB() {
  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.lockIcon}>🔒</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>FORGET PASSWORD</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>

      <View style={styles.section}>
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Next pressed')}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF', 
    justifyContent: 'space-evenly', 
    padding: 20,
  },
  section: {
    alignItems: 'center',
  },
  lockIcon: {
    fontSize: 120,
    color: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 10,
  },
  input: {
    width: '80%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: '#4682b4',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
