import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Carrot1, Location, Search } from "../assets/svg/icons";

// const itemBox = [
//     {
//         icon: require("../assets/pictures/banana.png"),

//     }
// ]

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <Carrot1 style={styles.carrot} width={25} height={35} />
      <View style={styles.country}>
        <Location style={styles.location} />
        <Text>Lagos, Nigeria</Text>
      </View>
      <View style={styles.searchInput}>
        <Search />
        <TextInput
          placeholder="Search store"
          placeholderTextColor="black"
          style={styles.search}
        />
      </View>
      <View style={styles.fruits}>
        <Image
          source={require("../assets/pictures/fruitBlend.png")}
          style={styles.fruitBlend}
        />
        <View style={styles.rightFruits}>
          <Image
            source={require("../assets/pictures/fruitMix.png")}
            style={styles.fruitMix}
          />
          <Text style={styles.vegetables}>Fresh Vegetables</Text>
          <Text style={styles.discount}>Get Up To 40% OFF</Text>
        </View>
      </View>
      <View style={styles.seeExclusive}>
        <Text style={styles.exclusive}>Exclusive offer</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemBox}>
          <Image
            source={require("../assets/pictures/banana.png")}
            style={styles.banana}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  seeExclusive: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  itemBox: {
    borderColor: "#E2E2E2",
    borderRadius: 15,
    borderWidth: 1.2,
    width: 150,
    height: 230,
  },
  banana: {
    width: 90,
    height: 75,
    alignSelf: "center",
    marginTop: 10,
  },
  seeAll: {
    color: "green",
  },
  exclusive: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fruitMix: {
    width: 80,
    height: 30,
    alignSelf: "flex-end",
  },
  discount: {
    fontSize: 13,
    color: "green",
  },
  vegetables: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rightFruits: {
    width: "65%",
    height: "100%",
  },
  fruits: {
    width: "100%",
    height: 90,
    borderWidth: 0.2,
    borderRadius: 5,
    borderColor: "grey",
    marginTop: 15,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 17,
  },
  fruitBlend: {
    width: "30%",
    height: 90,
    marginRight: "5%",
  },
  search: {
    marginLeft: 10,
    // paddingRight: 10,
    width: "90%",
  },
  searchInput: {
    flexDirection: "row",
    backgroundColor: "grey",
    height: 45,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  location: {
    marginRight: 10,
  },
  country: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  carrot: {
    alignSelf: "center",
    marginTop: 12,
  },
});
