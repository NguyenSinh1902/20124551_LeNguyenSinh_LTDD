import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const facebook = require('./logo/facebook.png');
const zalo = require('./logo/zalo.png');
const google = require('./logo/google.png');

export default function ScreenD() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.section}>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity style={styles.eyeButton} onPress={() => setPasswordVisible(!passwordVisible)}>
            <Text style={styles.togglePassword}>
              {passwordVisible ? '👁️' : '🙈'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Login pressed')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.terms}>
          When you agree to terms and conditions
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.forgotPassword}>
          For got password?
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.orLoginWith}>
          Or login with
        </Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={facebook} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={zalo} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={google} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    justifyContent: 'center',
    padding: 20,
  },
  section: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    top: 15,
    zIndex: 1,
  },
  togglePassword: {
    fontSize: 24,
  },
  button: {
    width: '100%',
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  terms: {
    textAlign: 'center',
  },
  forgotPassword: {
    color: 'blue',
  },
  orLoginWith: {
    textAlign: 'center',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  socialButton: {
    padding: 10,
  },
  socialIcon: {
    marginLeft: 50,
    width: 60,
    height: 60,
  },
});
