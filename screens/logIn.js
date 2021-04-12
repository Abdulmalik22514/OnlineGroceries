import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Back, Carrot, Carrot1, Password } from "../assets/svg/icons";
import { CustomButtons } from "../components/buttons";
import { CustomInput1 } from "../components/inputs";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Carrot1 style={styles.carrot} width={35} height={45} />
      <Text style={styles.selectLoc}>Login</Text>
      <Text style={styles.swicthLoc}>Enter your email and password</Text>
      <CustomInput1 placeholder="imshuvo97@gmail.com" title="Email" />
      <CustomInput1 title="Password" secure icon={<Password />} />
      <TouchableOpacity>
        <Text style={styles.recovery}>Forgot Password?</Text>
      </TouchableOpacity>
      <CustomButtons
        title="Login"
        diffMargin
        onPress={() => navigation.navigate("home")}
      />
      <View style={styles.newUser}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text style={styles.signup}>Sign up</Text>
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
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  carrot: {
    alignSelf: "center",
    marginTop: 40,
  },
  swicthLoc: {
    color: "#7C7C7C",
    marginBottom: 50,
  },
  selectLoc: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
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
