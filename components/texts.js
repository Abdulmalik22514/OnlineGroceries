import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CustomTexts = ({ title, onChangeStyle, style, colorChange }) => {
  return (
    <View>
      <Text
        style={[
          styles.welcome,
          onChangeStyle && styles.getRate,
          colorChange && styles.nectar,
          style,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nectar: {
    fontSize: 22,
    color: "black",
    textAlign: null,
    width: 250,
    fontWeight: "bold",
  },
  getRate: {
    color: "#FCFCFC",
    fontSize: 13,
    width: 400,
  },
  welcome: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    width: 220,
  },
});
