import { Image } from "expo-image";
import Animated, { useSharedValue } from "react-native-reanimated";
import { View, Text, Pressable, Slot} from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";

const imagePath = "../assets/writing.png";

export default function Main(){

	return (
		<View
		style={{width: "100%", height: "100%", padding: 20, justifyContent: "space-between", position: "relative", backgroundColor: "#0d1b2a"}}
		>
			<Text
				style={{ color: "white", fontSize: 25, fontWeight: "bold", paddingTop: 25, paddingLeft: 5, }}
			>Todo</Text>

			<View>
				<View style={{ flexDirection: "row", gap: 4 }}>
					<View style={{gap: 4}}>
						<Image style={{ width: 200, height: 70, borderRadius: 20 }} source={"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"} />
						<Text style={{ color: "white", fontSize: 45, fontWeight: "bold" }}>Express</Text>
					</View>
					<Image style={{ width: 200, height: 140, borderRadius: 20 }} source={"https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"} />
				</View>
			</View>

			<View>
				<View style={{ marginTop: 5, marginBottom: 5 }}>
				<Text
				style={{ color: "white", fontWeight: "bold", fontSize: 33, textAlign: "center" }}
				>Imagine, write, create</Text>
				<Text style={{fontSize: 16, textAlign: "center",color: "white" }}>When an idea strikes, write it down</Text>
				</View>

				<View
				style={{ marginTop: 10, marginBottom: 5 }}
				>
					<Link href="/dashboard" asChild>
					<Pressable
						style={{ borderRadius: 50, marginTop: 30, backgroundColor: "white", padding: 15, justifyContent: "center", flexDirection: "row", alignItems: "center", gap: 10,}}
					>
						<Text
						 style={{ fontSize: 20, fontWeight: "bold", color: "black" }}
						>Get started</Text>
						<AntDesign name="arrowright" size={24} color="black" />
					</Pressable>
					</Link>
				</View>
			</View>
		</View>
	)
}