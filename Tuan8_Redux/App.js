import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, FlatList, View, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './components/store';
import { addTask } from './components/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <View style={styles.cardContent}>
        <Text style={styles.taskText}>{item.title}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => editTask(item.id)}>
            <Icon name="edit" size={24} color="#3498db" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <Icon name="delete" size={24} color="#e74c3c" />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );

  const editTask = (id) => {
    
  };

  const deleteTask = (id) => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/383226844_782641736883964_3638266643418050306_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=U-vQI8CTkNQQ7kNvgEuEIF7&_nc_zt=24&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=A1Y7OCZXIqRdEshLCwCw3Wg&oh=00_AYAMH7OPZAbT0gyDK4Yiz8YnBbWMXLjo1xgEs9_JAbD_Fw&oe=672AE04D' }} // Replace with your avatar URL
          style={styles.avatar}
        />
        <View>
          <Text style={styles.greeting}>Hi Nguyen Sinh</Text>
          <Text style={styles.subGreeting}>To do list today</Text>
        </View>
      </View>
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
  header: {
    marginTop: 50,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  searchBar: {
    marginTop: 20,
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
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});