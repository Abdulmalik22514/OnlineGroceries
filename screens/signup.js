import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Back, Carrot, Carrot1, Check, Password } from "../assets/svg/icons";
import { CustomButtons } from "../components/buttons";
import { CustomInput1 } from "../components/inputs";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Carrot1 style={styles.carrot} width={30} height={40} />
      <Text style={styles.selectLoc}>Sign Up</Text>
      <Text style={styles.swicthLoc}>Enter your credentials to continue</Text>
      <CustomInput1 placeholder="Abdulmalik Ibrahim" title="Username" />
      <CustomInput1
        placeholder="ibrahimmalik095@gmail.com"
        title="Email"
        icon={<Check />}
      />
      <CustomInput1 title="Password" secure icon={<Password />} />
      <TouchableOpacity>
        <Text style={styles.recovery}>
          By continuing you agree to our Terms of Service and Privacy Policy.
        </Text>
      </TouchableOpacity>
      <CustomButtons
        title="Sign Up"
        diffMargin
        onPress={() => navigation.navigate("home")}
      />
      <View style={styles.newUser}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.signup}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  signup: {
    color: "#53B175",
  },
  newUser: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
  recovery: {
    marginBottom: 20,
    color: "#7C7C7C",
  },
  carrot: {
    alignSelf: "center",
    marginTop: 25,
  },
  swicthLoc: {
    color: "#7C7C7C",
    marginBottom: 40,
  },
  selectLoc: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
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
