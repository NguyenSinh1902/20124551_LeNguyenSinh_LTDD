import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../redux/actions/todoActions';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const loading = useSelector(state => state.todos.loading);
  const error = useSelector(state => state.todos.error);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [price, setPrice] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    const newTodo = { name, avatar, price: parseFloat(price) };
    dispatch(addTodo(newTodo));
    setName('');
    setAvatar('');
    setPrice('');
  };

  const handleUpdateTodo = () => {
    const updatedTodo = { ...editingTodo, name, avatar, price: parseFloat(price) };
    dispatch(updateTodo(updatedTodo));
    setEditingTodo(null);
    setName('');
    setAvatar('');
    setPrice('');
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setName(todo.name);
    setAvatar(todo.avatar);
    setPrice(todo.price.toString());
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat Products</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Avatar URL"
        value={avatar}
        onChangeText={setAvatar}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      {editingTodo ? (
        <TouchableOpacity onPress={handleUpdateTodo} style={styles.updateButton}>
          <Text style={styles.buttonText}>Update Todo</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>Price: ${item.price}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleEditTodo(item)} style={styles.editButton}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteTodo(item.id)} style={styles.deleteButton}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 35,
    color: '#DE8F5F',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  addButton: {
    backgroundColor: '#FFB26F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  updateButton: {
    backgroundColor: '#FFCF9D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: '#FFCF9D',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#FFB38E',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodoList;