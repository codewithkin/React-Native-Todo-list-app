import { Stack } from "expo-router";

export default function Main(){
	return (
		<Stack>
			<Stack.Screen 
			name="(notes)" 
			options={{
				// Hide the header
	    		headerShown: false
			}}
			/>
		</Stack>
	)
}
