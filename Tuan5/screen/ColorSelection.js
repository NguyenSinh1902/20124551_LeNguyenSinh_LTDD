import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Green = require('../Color_iPhone16/Green.png');
const Pink = require('../Color_iPhone16/Pink.png');
const White = require('../Color_iPhone16/White.png');
const Blue = require('../Color_iPhone16/Blue.png');

function ColorSelection({ navigation }) {
  const [selectedColor, setSelectedColor] = useState(Blue); // Mặc định là màu xanh

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={selectedColor} style={styles.image} />
        <Text style={styles.phoneName}>Điện thoại iPhone 16</Text>
      </View>

      <Text style={styles.selectColorText}>Chọn một màu bên dưới:</Text>

      <View style={styles.colorOptions}>
        <TouchableOpacity
          style={[styles.colorBox, { backgroundColor: 'green' }, selectedColor === Green && styles.selectedBox]}
          onPress={() => handleColorChange(Green)}
        />
        <TouchableOpacity
          style={[styles.colorBox, { backgroundColor: 'pink' }, selectedColor === Pink && styles.selectedBox]}
          onPress={() => handleColorChange(Pink)}
        />
        <TouchableOpacity
          style={[styles.colorBox, { backgroundColor: 'white' }, selectedColor === White && styles.selectedBox]}
          onPress={() => handleColorChange(White)}
        />
        <TouchableOpacity
          style={[styles.colorBox, { backgroundColor: 'blue' }, selectedColor === Blue && styles.selectedBox]}
          onPress={() => handleColorChange(Blue)}
        />
      </View>

      <TouchableOpacity 
        style={styles.doneButton} 
        onPress={() => navigation.navigate('Screen01', { selectedColor })}>
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
  phoneName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  selectColorText: {
    fontSize: 18,
    marginBottom: 16,
  },
  colorOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorBox: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  selectedBox: {
    borderColor: 'black', // Viền đen cho ô được chọn
    borderWidth: 5, // Độ dày viền
    borderRadius: 5, // Bo tròn viền
  },
  doneButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  doneButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorSelection;
