import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Screen02 from "./components/Screen02.js";
// import test from "./components/test.js";
import Screen03 from "./components/Screen03.js";

const Stack = createStackNavigator();
const HomePage = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("./Data/Image 95.png")}
        style={{ marginTop: 30 }}
      />
      <Text
        style={{
          fontSize: 30,
          marginTop: 20,
          fontWeight: "bold",
          color: "violet",
        }}
      >
        MANAGE YOUR
      </Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "violet" }}>
        TASK
      </Text>
      <TextInput
        placeholder="Enter your name"
        style={{
          flexDirection: "row",
          width: "80%",
          height: 50,
          borderRadius: 15,
          backgroundColor: "#f0f0f0",
          borderWidth: 1,
          marginTop: 80,
        }}
        left={<TextInput.Icon icon={"email"} />}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          paddingHorizontal: 55,
          backgroundColor: "#cefe",
          borderRadius: 15,
          marginTop: 80,
        }}
        onPress={() => {
          navigation.navigate("Screen02", { name });
        }}
      >
        <Text>GET STARTED </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
          options={({ route, navigation }) => ({
            title: "Screen02",
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <Image
                    source={require("./Data/Avatar 31.png")}
                    style={{ marginRight: 5 }}
                  />
                </TouchableOpacity>

                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Hi {route.params.name}
                  </Text>
                  <Text>Have a great day head</Text>
                </View>
              </View>
            ),
          })}
        />
        {/* <Stack.Screen name="Test" component={test} /> */}
        <Stack.Screen
          name="Screen03"
          component={Screen03}
          options={({ route, navigation }) => ({
            title: "",
            headerLeft: () => (
              <View style={{ flexDirection: "row", marginLeft: 25 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Test");
                  }}
                >
                  <Image
                    source={require("./Data/Avatar 31.png")}
                    style={{ marginRight: 5 }}
                  />
                </TouchableOpacity>

                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Hi {route.params?.name ?? "Guest"}
                  </Text>
                  <Text>Have a great day head</Text>
                </View>
                <TouchableOpacity
                  style={{ marginLeft: 130 }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Image source={require("./Data/Icon Button 12.png")} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
