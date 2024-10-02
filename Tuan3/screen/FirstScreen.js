import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FirstScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#97FFFF", justifyContent: "center", alignItems: "center" }}>
        <View style={styles.circle}></View>
      </View>

      <View style={{ flex: 0.8, backgroundColor: "#8DEEEE", justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.textGrow}>GROW</Text>
        <Text style={styles.textBusiness}>YOUR BUSINESS</Text>
      </View>

      <View style={{ flex: 0.7, backgroundColor: "#79CDCD", justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.textHelp}>We will help you to grow your business using online server</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Save button pressed')}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Cancel button pressed')}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  textGrow: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
  },
  textBusiness: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
  },
  textHelp: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 0.5,
    backgroundColor: "#528B8B",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2E8B57",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: 'bold',
  },
});
