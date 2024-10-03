import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const defaultColor = require('../Color_iPhone16/Blue.png');

function Screen01({ route, navigation }) {
  const { selectedColor } = route.params || {};
  const colorToDisplay = selectedColor || defaultColor;

  return (
    <View style={styles.container}>
      <Image source={colorToDisplay} style={styles.image} />
      
      <Text style={styles.phoneName}>Điện thoại iPhone 16</Text>

      <View style={styles.ratingContainer}>
        <View style={styles.stars}>
          {Array(5).fill(0).map((_, index) => (
            <FontAwesome key={index} name="star" size={24} color="gold" />
          ))}
        </View>
        <Text style={styles.ratingText}>(850 đánh giá)</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.currentPrice}>21.850.000 VND</Text>
        <Text style={styles.originalPrice}>26.500.000 VND</Text>
      </View>

      <View style={styles.promoContainer}>
        <Text style={styles.promoText}>Ở đâu rẻ hơn hoàn tiền</Text>
        <FontAwesome name="money" size={24} color="green" />
      </View>

      <TouchableOpacity style={styles.colorSelect} onPress={() => navigation.navigate('ColorSelection')}>
        <Text>4 màu, chọn màu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton} onPress={() => alert('Bạn đã chọn mua sản phẩm!')}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
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
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  phoneName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  currentPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  promoText: {
    fontSize: 16,
    color: 'green',
    marginRight: 8,
  },
  colorSelect: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginBottom: 16,
  },
  buyButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    height: 55,
    justifyContent: 'center'
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen01;
