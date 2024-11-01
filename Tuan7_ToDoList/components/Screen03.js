import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Screen03 = () => {
  const [job, setJob] = useState("");
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 40 }}>
        ADD YOUR JOB
      </Text>
      <TextInput
        placeholder="Input your job"
        style={{
          flexDirection: "row",
          width: "90%",
          backgroundColor: "white",
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 40,
        }}
        left={
          <TextInput.Icon
            icon={() => <Image source={require("../Data/fxemoji_note.png")} />}
          />
        }
        value={job}
        onChangeText={setJob}
      />
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          width: "50%",
          backgroundColor: "#DCFE",
          marginTop: 50,
          alignItems: "center",
          borderRadius: 15,
        }}
        onPress={() => {
          navigation.navigate("Screen02", { newJob: job });
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>FINISH</Text>
      </TouchableOpacity>
      <Image
        source={require("../Data/Image 95.png")}
        style={{ width: 200, height: 200, marginTop: 50 }}
      />
    </View>
  );
};

export default Screen03;