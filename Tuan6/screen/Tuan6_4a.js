import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';

const accessories = [
    { id: '1', name: 'Sạc không dây', price: '500.000 VND', rating: 4, image: 'https://i.pinimg.com/564x/8b/a0/84/8ba084a7b4bb44f7ba64c5077c182e55.jpg' },
    { id: '2', name: 'Ốp lưng điện thoại', price: '350.000 VND', rating: 5, image: 'https://i.pinimg.com/736x/22/24/6a/22246ad2ab8fea4367436ff375aecefb.jpg' },
    { id: '3', name: 'Miếng dán màn hình', price: '250.000 VND', rating: 4.5, image: 'https://i.pinimg.com/564x/42/bb/bd/42bbbd2c6cd85bd78c48f09233efc94e.jpg' },
    { id: '4', name: 'Tai nghe Bluetooth', price: '1.200.000 VND', rating: 5, image: 'https://i.pinimg.com/564x/4f/eb/ce/4febce3f5e81341aed90eb241002da85.jpg' },
    { id: '5', name: 'Pin sạc dự phòng', price: '700.000 VND', rating: 4, image: 'https://i.pinimg.com/736x/f5/0e/19/f50e1906bcf524891de34e965abd73f3.jpg' },
    { id: '6', name: 'Giá đỡ điện thoại', price: '300.000 VND', rating: 4.5, image: 'https://i.pinimg.com/564x/94/42/cd/9442cd64c53f50c7c4bded082738a067.jpg' },
    { id: '7', name: 'Giá đỡ trên xe hơi', price: '450.000 VND', rating: 4, image: 'https://i.pinimg.com/564x/c6/ab/50/c6ab505b65b3ddb5adf93eca236e89e8.jpg' },
    { id: '8', name: 'Tai nghe không dây', price: '1.000.000 VND', rating: 5, image: 'https://i.pinimg.com/736x/95/64/48/9564488563a17d5bd2201fd218a27582.jpg' },
    { id: '9', name: 'Giá đỡ điện thoại dạng vòng', price: '200.000 VND', rating: 4, image: 'https://i.pinimg.com/736x/0c/eb/5a/0ceb5aed42df95f9a2f2026771dd33f8.jpg' },
    { id: '10', name: 'Cáp USB-C', price: '150.000 VND', rating: 5, image: 'https://i.pinimg.com/564x/7d/97/30/7d97309f1a0aadfd1475c491932ee5cc.jpg' },
    { id: '11', name: 'Bút cảm ứng', price: '350.000 VND', rating: 4.5, image: 'https://i.pinimg.com/736x/b1/0c/73/b10c73bd9003e4d7bfe8f20c56edf413.jpg' },
  ];
  

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text key={i} style={{ color: i <= rating ? 'gold' : 'gray' }}>★</Text>
    );
  }
  return stars;
};

export default function AccessoriesList({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.rating}>{renderStars(item.rating)}</View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity 
  style={styles.chatButton} 
  onPress={() => alert('Chat with support')}
  activeOpacity={0.7} // Hiệu ứng nhấn
>
  <Text style={styles.chatButtonText}>Chat</Text>
</TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CHAT</Text>
        <TouchableOpacity onPress={() => alert('Go to Cart')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList for accessories */}
      <FlatList
        data={accessories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => alert('Back')}>
          <Text style={styles.footerButtonText}>◀</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => alert('Home')}>
          <Text style={styles.footerButtonText}>⬤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => alert('Recent')}>
          <Text style={styles.footerButtonText}>☰</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightgray',
  },
  headerButton: {
    padding: 10,
  },
  headerButtonText: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 16,
    color: '#4682b4',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'lightgray',
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    fontSize: 20,
  },
  chatButton: {
    backgroundColor: '#4682b4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
