import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function ScreenC() {
  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.lockIcon}>CODE</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>VERIFICATION</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>
          Enter onetime password sent on 0398890029
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="" maxLength={1} />
          <TextInput style={styles.input} placeholder="" maxLength={1} />
          <TextInput style={styles.input} placeholder="" maxLength={1} />
          <TextInput style={styles.input} placeholder="" maxLength={1} />
          <TextInput style={styles.input} placeholder="" maxLength={1} />
          <TextInput style={styles.input} placeholder="" maxLength={1} />
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Verify Code pressed')}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
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
    fontSize: 80,
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    width: 40,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#4682b4',
    paddingVertical: 12,
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
