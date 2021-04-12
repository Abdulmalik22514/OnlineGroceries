import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Back, Forward } from "../assets/svg/icons";
import { CustomInput } from "../components/inputs";

export default function Number({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Back style={styles.back} />
      </TouchableOpacity>

      <Text style={styles.mobileNumber}>Enter your mobile number</Text>
      <Text style={styles.number}>Mobile Number</Text>
      <CustomInput keyboardType="phone-pad" />
      <TouchableOpacity
        style={styles.forward}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("verify")}
      >
        <Forward />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  forward: {
    backgroundColor: "#53B175",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    alignSelf: "flex-end",
  },
  number: {
    fontSize: 13,
    marginTop: 10,
    color: "#7C7C7C",
  },
  back: {
    marginTop: 20,
  },
  mobileNumber: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
