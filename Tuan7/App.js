import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editingId, setEditingId] = useState(null);

  // Fetch data from API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://6703835abd7c8c1ccd41b867.mockapi.io/product');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add a new product
  const addProduct = async () => {
    if (name && price) {
      try {
        const response = await fetch('https://6703835abd7c8c1ccd41b867.mockapi.io/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, price }),
        });
        const newProduct = await response.json();
        setProducts([...products, newProduct]);
        setName('');
        setPrice('');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    } else {
      Alert.alert('Please enter both name and price');
    }
  };

  // Edit an existing product
  const editProduct = async () => {
    if (name && price && editingId) {
      try {
        const response = await fetch(`https://6703835abd7c8c1ccd41b867.mockapi.io/product/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, price }),
        });
        const updatedProduct = await response.json();
        const updatedProducts = products.map((product) =>
          product.id === editingId ? updatedProduct : product
        );
        setProducts(updatedProducts);
        setName('');
        setPrice('');
        setEditingId(null);
      } catch (error) {
        console.error('Error editing product:', error);
      }
    } else {
      Alert.alert('Please select a product to edit and enter name and price');
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      await fetch(`https://6703835abd7c8c1ccd41b867.mockapi.io/product/${id}`, {
        method: 'DELETE',
      });
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const renderProduct = ({ item }) => (
    <View style={styles.product}>
      <Text>{item.name} - ${item.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setName(item.name);
          setPrice(item.price);
          setEditingId(item.id);
        }}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.deleteButton]}
        onPress={() => deleteProduct(item.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={editingId ? editProduct : addProduct}
      >
        <Text style={styles.addButtonText}>
          {editingId ? 'Update Product' : 'Add Product'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
