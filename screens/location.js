import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Back, Dropdown } from "../assets/svg/icons";
import { CustomButtons } from "../components/buttons";
import { CustomInput1 } from "../components/inputs";

export default function SelectLocation({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Back style={styles.back} />
      </TouchableOpacity>
      <Image
        source={require("../assets/pictures/locator.png")}
        style={styles.locator}
      />
      <Text style={styles.selectLoc}>Select Your Location</Text>
      <Text style={styles.swicthLoc}>
        Switch on your location to stay in tune with what’s happening in your
        area
      </Text>
      <CustomInput1
        placeholder="Banashee"
        title="Your Zone"
        icon={<Dropdown />}
      />
      <CustomInput1
        placeholder="Type of your Area"
        title="Your Area"
        icon={<Dropdown />}
      />
      <CustomButtons
        title="Submit"
        diffMargin
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  swicthLoc: {
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 50,
  },
  selectLoc: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  back: {
    marginTop: 20,
  },
  locator: {
    width: 200,
    height: 150,
    alignSelf: "center",
    marginTop: 10,
  },
});
