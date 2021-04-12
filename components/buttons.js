import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const CustomButtons = ({ title, onPress, diffMargin }) => {
  return (
    <TouchableOpacity
      style={[styles.started, diffMargin && styles.locMargin]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.getStarted}>{title}</Text>
    </TouchableOpacity>
  );
};

export const CustomButtons1 = ({
  title,
  icon,
  hasMargin,
  hasColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.option1,
        hasMargin && styles.option2,
        hasColor && styles.option2,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon}
      <Text style={styles.google}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  locMargin: {
    marginTop: 10,
  },
  started: {
    width: "100%",
    backgroundColor: "#53B175",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  google: {
    color: "white",
  },
  option1: {
    backgroundColor: "#5383EC",
    flexDirection: "row",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
  },
  option2: {
    marginTop: 15,
    backgroundColor: "#4A66AC",
  },
  getStarted: {
    color: "white",
    fontWeight: "bold",
  },
});
