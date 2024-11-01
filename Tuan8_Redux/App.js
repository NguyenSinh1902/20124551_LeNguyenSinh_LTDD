import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, FlatList, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './components/store';
import { addTask } from './components/actions';

function TaskApp() {
  const [search, setSearch] = useState('');
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNewTask = () => {
    if (search.trim()) {
      dispatch(addTask(search));
      setSearch('');
    }
  };

  const renderTask = ({ item }) => (
    <Card style={styles.card}>
      <Text style={styles.taskText}>{item.title}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Enter a task"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={addNewTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TaskApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  searchBar: {
    margin: 12,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 10,
    margin: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  taskText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
