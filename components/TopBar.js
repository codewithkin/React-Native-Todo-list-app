import { Pressable, Text, View, Image,DrawerLayoutAndroid, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { Feather } from "@expo/vector-icons";
const tasks = 0;
const imageUrl = require("../assets/user.jpg");

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const date = `${new Date().getDate()} ${months[new Date().getMonth()]}`;


export default function TopBar () {
  const drawer = useRef(null);
  return (
    <View style={styles.parent}>
    <View style={styles.container}>
      <Feather name="menu" size={28} color="white" />
      <Text style={styles.heading}>{date}</Text>
      <Image source={imageUrl} style={styles.userImage} />
    </View>

    <View style={{ flexDirection: "row",paddingTop: 15,paddingBottom: 25, justifyContent: "space-between", alignItems: "center", }}>
     <View>
     <Text style={styles.statsHeading}>Today</Text>
     <Text style={styles.statsParagraph}>{tasks} tasks created</Text>
     </View>

     <View>
       <Pressable style={styles.addNewButton}>
          <Text style={{ color: "#083D77", fontWeight: "bold", textAlign: "center", fontSize: 17 }}>Add new</Text>
        </Pressable>
     </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  statsHeading: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  statsParagraph: {
    fontSize: 15,
    color: "lightgray",
    fontWeight: "bold",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  parent: {
    flexDirection: "column",
    gap: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  addNewButton: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    width: 150,
  }
});
