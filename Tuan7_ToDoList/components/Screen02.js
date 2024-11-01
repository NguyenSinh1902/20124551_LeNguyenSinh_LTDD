import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";

const renderFlatList = ({ item }) => (
  <TouchableOpacity
    style={{
      paddingVertical: 15,
      width: "90%",
      backgroundColor: "#cbfe",
      margin: 5,
      marginLeft: 20,
      borderRadius: 20,
    }}
  >
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginLeft: 15 }}>
          <Image source={require("../Data/mdi_marker-tick.png")} style={{ width: 20, height: 20 }} />
        </View>
        <Text style={{ marginLeft: 20, fontWeight: "bold" }}>{item.name}</Text>
      </View>
      <View style={{ marginRight: 15 }}>
        <TouchableOpacity>
          <Image source={require("../Data/iconamoon_edit-bold.png")} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const Screen02 = ({ route, navigation }) => {
  const { name } = route.params;
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://6703835abd7c8c1ccd41b867.mockapi.io/pets")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (route.params?.newJob) {
      const newJob = {
        id: data.length + 1,
        name: route.params.newJob,
        iconTich: "https://path/to/mdi_marker-tick.png",
        iconEdit: "https://path/to/iconamoon_edit-bold.png",
      };
      setData([...data, newJob]);
    }
  }, [route.params?.newJob]);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  return (
    <View>
      <TextInput
        placeholder="Search"
        style={{
          marginTop: 25,
          width: "90%",
          marginLeft: 20,
          backgroundColor: "white",
          borderWidth: 0.5,
          borderRadius: 10,
        }}
        left={<TextInput.Icon icon="magnify" />}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList data={filteredData} renderItem={renderFlatList} style={{marginTop: 15}}/>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            paddingVertical: 23,
            width: 100,
            backgroundColor: "#ceca",
            borderRadius: 50,
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Screen03", { name });
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen02;