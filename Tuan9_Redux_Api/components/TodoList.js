import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo } from "../acctions/todoActions";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(
        addTodo({
          id: Date.now().toString(),
          name: newTodo,
        })
      );
      setNewTodo("");
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.errorText}>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter new todo"
        value={newTodo}
        onChangeText={setNewTodo}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleAddTodo}
        style={{
          width: "100%",
          height: 45,
          backgroundColor: "#FFB38E",
          opacity: 0.8,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    flex: 1,
  },
  input: {
    borderColor: "gray",
    borderWidth: 0.5,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginTop: 50,
  },
  todoItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#e9ecef",
    borderRadius: 5,
  },
  todoText: {
    fontSize: 16,
    color: "#343a40",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default TodoList;
