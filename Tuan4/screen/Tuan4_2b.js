import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ReviewScreen({ navigation }) {
  const [comment, setComment] = useState('');

  const handleAdd = () => {
 
    alert(`Nhận xét: ${comment}`);
  };

  return (
    <View style={styles.container}>
  
      <View style={styles.productContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/39/15/bd/3915bd32c88e75e9a9bd66268b13fe5b.jpg' }} 
          style={styles.productImage} 
        />
        <Text style={styles.productName}>
          USB Bluetooth Music Receiver HJX-001-Biến loa thường thành loa Bluetooth
        </Text>
      </View>

      <Text style={styles.satisfactionText}>Cực kì hài lòng</Text>
      <View style={styles.stars}>
        {Array(5).fill(0).map((_, index) => (
          <FontAwesome key={index} name="star" size={24} color="gold" />
        ))}
      </View>

      <TouchableOpacity style={styles.addImageContainer}>
        <FontAwesome name="camera" size={32} color="gray" />
        <Text style={styles.addImageText}>Thêm hình ảnh</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.commentInput}
        placeholder="Nhận xét của bạn"
        multiline
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Thêm</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>Quay lại Home</Text>
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
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  satisfactionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  addImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
  },
  addImageText: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
  commentInput: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
});
