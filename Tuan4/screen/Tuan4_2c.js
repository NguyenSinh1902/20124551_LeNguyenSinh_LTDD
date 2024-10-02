import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);

  const checkLowerCase = (pw) => /[a-z]/.test(pw);
  const checkUpperCase = (pw) => /[A-Z]/.test(pw);
  const checkNumber = (pw) => /\d/.test(pw);
  const checkSpecialChar = (pw) => /[!@#$%^&*(),.?":{}|<>]/.test(pw);
  const checkLength = (pw) => pw.length >= 8;

  const generatePassword = () => {
    setCheckPassword(true);
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let generatedPassword = '';
    for (let i = 0; i < 12; i++) {
      generatedPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(generatedPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Password</Text>

      <TextInput
        style={styles.passwordInput}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.criteriaContainer}>
        <View style={styles.criteriaItem}>
          <Text style={styles.criteriaText}>Password Length: {password.length} (min 8)</Text>
          <View style={styles.box}>
            {checkPassword && checkLength(password) && <FontAwesome name="check" size={24} color="green" />}
          </View>
        </View>
        <View style={styles.criteriaItem}>
          <Text style={styles.criteriaText}>Include lowercase letters</Text>
          <View style={styles.box}>
            {checkPassword && checkLowerCase(password) && <FontAwesome name="check" size={24} color="green" />}
          </View>
        </View>
        <View style={styles.criteriaItem}>
          <Text style={styles.criteriaText}>Include uppercase letters</Text>
          <View style={styles.box}>
            {checkPassword && checkUpperCase(password) && <FontAwesome name="check" size={24} color="green" />}
          </View>
        </View>
        <View style={styles.criteriaItem}>
          <Text style={styles.criteriaText}>Include numbers</Text>
          <View style={styles.box}>
            {checkPassword && checkNumber(password) && <FontAwesome name="check" size={24} color="green" />}
          </View>
        </View>
        <View style={styles.criteriaItem}>
          <Text style={styles.criteriaText}>Include special symbols</Text>
          <View style={styles.box}>
            {checkPassword && checkSpecialChar(password) && <FontAwesome name="check" size={24} color="green" />}
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
        <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#600080',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  criteriaContainer: {
    marginBottom: 30,
  },
  criteriaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  criteriaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  box: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateButton: {
    backgroundColor: '#907BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
