import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Back, Forward } from "../assets/svg/icons";

export default function Verification({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Back style={styles.back} />
      </TouchableOpacity>

      <Text style={styles.mobileNumber}>Enter your 4-digit code</Text>
      <Text style={styles.number}>Code</Text>
      <TextInput
        style={styles.countryName}
        keyboardType="phone-pad"
        placeholder="----"
        placeholderTextColor="#181725"
      />
      <View style={styles.resend}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Text style={styles.resendCode}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forward}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("location")}
        >
          <Forward />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  resendCode: {
    color: "#53B175",
  },
  countryName: {
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    fontSize: 20,
    letterSpacing: 3,
  },
  resend: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 150,
  },
  forward: {
    backgroundColor: "#53B175",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
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
