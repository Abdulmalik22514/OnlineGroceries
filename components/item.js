import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Add } from "../assets/svg/icons";

export const ItemCont = [
  {
    icon: require("../assets/pictures/banana.png"),
    title: "Organic Bananas",
    qty: "7pcs, Price",
    price: "$4.99",
  },
];

export const ItemBox = () => {
  return (
    <View style={styles.itemBox}>
      <Image
        source={require("../assets/pictures/banana.png")}
        style={styles.banana}
      />
      <Text>Organic Bananas</Text>
      <Text>7pcs, Price</Text>
      <View style={styles.priceAdd}>
        <Text>{`$ ${4.99}`}</Text>
        <View style={styles.addition}>
          <Add />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addition: {
    backgroundColor: "#53B175",
    width: 37,
    height: 37,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  priceAdd: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemBox: {
    borderColor: "#E2E2E2",
    borderRadius: 15,
    borderWidth: 1.2,
    width: 150,
    height: 230,
    paddingHorizontal: 10,
  },
  banana: {
    width: 90,
    height: 75,
    alignSelf: "center",
    marginTop: 10,
  },
});
