import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function BookScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);
  const price = 141800;
  const originalPrice = 250000;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>

      <View style={styles.productContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/92/8b/9f/928b9f5981776a37693dc25289baa2d7.jpg' }} 
          style={styles.productImage} 
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.provider}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>141.800 VND</Text>
          <Text style={styles.originalPrice}>250.000 VND</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.discountContainer}>
        <Text style={styles.discountLabel}>Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text style={styles.viewDiscount}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.applyDiscountContainer}>
        <TextInput placeholder="Mã giảm giá" style={styles.discountInput} />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>ÁP DỤNG</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.giftCardContainer}>
        <Text style={styles.giftCardLabel}>Phiếu quà tặng Tiki/Got it/Unbox?</Text>
        <TouchableOpacity>
          <Text style={styles.enterHere}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Tạm tính</Text>
        <Text style={styles.subtotalPrice}>{(price * quantity).toLocaleString()} VND</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Thành tiền:</Text>
          <Text style={styles.totalPrice}>{(price * quantity).toLocaleString()} VND</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>TIẾN HÀNH THANH TOÁN</Text>
        </TouchableOpacity>
      </View>

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
    backgroundColor: '#f5f5f5',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  provider: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
  },
  quantityValue: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  discountLabel: {
    fontSize: 16,
  },
  viewDiscount: {
    color: '#007BFF',
    fontSize: 16,
  },
  applyDiscountContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  giftCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  giftCardLabel: {
    fontSize: 16,
  },
  enterHere: {
    color: '#007BFF',
    fontSize: 16,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subtotalText: {
    fontSize: 16,
  },
  subtotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  checkoutButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    textAlign: 'center',
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
