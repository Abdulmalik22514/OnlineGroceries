import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Carrot } from "../assets/svg/icons";
import { CustomButtons } from "../components/buttons";
import { CustomTexts } from "../components/texts";

export default function Onboarding({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/pictures/background.png")}
    >
      <StatusBar style={"light"} />
      <Carrot style={styles.carrot} />
      <CustomTexts title="Welcome to our store" />
      <CustomTexts
        title="Get your groceries in as fast as one hour"
        onChangeStyle={true}
      />
      <CustomButtons
        title="Get Started"
        onPress={() => navigation.navigate("signin")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  carrot: {
    marginTop: 300,
  },
});
