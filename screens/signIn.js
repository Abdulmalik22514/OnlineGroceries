import { StatusBar } from "expo-status-bar";
import React from "react";
import { Facebook, Google } from "../assets/svg/icons";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomTexts } from "../components/texts";
import { CustomButtons1 } from "../components/buttons";
import { CustomInput } from "../components/inputs";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Image
        source={require("../assets/pictures/signImage.png")}
        style={styles.topImage}
      />

      <View style={styles.middleBox}>
        <CustomTexts title="Get your groceries with nectar" colorChange />
        <CustomInput />
        <Text style={styles.socialOptions}>Or connect with social media</Text>
        <CustomButtons1
          icon={<Google width={20} height={18} style={styles.googleIcon} />}
          title="Continue with Google"
          onPress={() => navigation.navigate("number")}
        />
        <CustomButtons1
          icon={<Facebook width={15} height={20} style={styles.googleIcon} />}
          title="Continue with Facebook"
          hasMargin
          hasColor
          onPress={() => navigation.navigate("number")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  googleIcon: {
    marginRight: 45,
    marginLeft: 30,
  },
  middleBox: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "center",
  },
  socialOptions: {
    alignSelf: "center",
    fontSize: 12,
    color: "#828282",
    marginBottom: 30,
  },

  topImage: {
    width: "100%",
    height: 250,
  },
});
