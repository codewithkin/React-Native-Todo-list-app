import React, { useState } from "react";
import { Image } from "expo-image";
import Animated, { useSharedValue } from "react-native-reanimated";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Slot } from "expo-router";

const imagePath = "../assets/writing.png";

export default function Main(){
	return (
		<Slot />
	)
}