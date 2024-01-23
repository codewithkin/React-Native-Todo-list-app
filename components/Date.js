import React from "react";
import { View, Text, SyleSheet } from "react-native";

const Date = () => {
  return (
      <View style={{
        backgroundColor: "#083D77",
        width: 70,
        borderRadius: 10,
        padding: 15,
        height: 90,
      }}>
        <Text style={{
          color: "white", 
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
        >22</Text>
        <Text
         style={{
         color: "gray",
          fontSize: 14,
          fontWeight: "bold",
          textAlign: "center", 
        }} 
       >Jan</Text>
     </View>
  )
}

export default Date;
