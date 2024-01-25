import { View, Text, TouchableOpacity } from "react-native";

export default function Main(){
	return (
		<View
		style={{width: "100%", height: "100%", padding: 20, alignContent: "flex-end", backgroundColor: "red"}}
		>
			<Text
			style={{ color: "black", fontWeight: "bold", fontSize: 33, textAlign: "center" }}
			>Imagine, write, create</Text>
			<Text style={{fontSize: 16, textAlign: "center", }}>When an idea strikes, write it down</Text>
			<TouchableOpacity
			style={{ backgroundColor: "white",borderRadius: 10, color: "black", marginTop: 5, marginBottom: 5, textAlign: "center", flex: 1, flexDirection: "row" }}
			>
				<Text>Continue</Text>
			</TouchableOpacity>
		</View>
	)
}