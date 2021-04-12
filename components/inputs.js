import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown } from "../assets/svg/icons";

export const CustomInput = ({ keyboardType }) => {
  return (
    <View style={styles.countrySearch}>
      <Image
        source={require("../assets/pictures/country.png")}
        style={styles.countryLogo}
      />
      <Text style={styles.countryCode}>+880</Text>
      <TextInput style={styles.countryName} keyboardType={keyboardType} />
    </View>
  );
};

export const CustomInput1 = ({ title, placeholder, secure, icon }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.typeLocation}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"black"}
          secureTextEntry={secure}
        />
        <TouchableOpacity>{icon}</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  typeLocation: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    color: "#7C7C7C",
  },
  countryName: {
    marginLeft: 10,
    width: 400,
  },
  countrySearch: {
    flexDirection: "row",
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: "#E2E2E2",
    marginBottom: 20,
    alignItems: "center",
  },
  countryLogo: {
    width: 35,
    height: 20,
    borderRadius: 5,
    marginRight: 10,
  },
});
