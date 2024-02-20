import { Tabs } from "expo-router/tabs";
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <Tabs>
    	<Tabs.Screen 
		name="index" 
		options={{
			tabBarLabel: "Dashboard",
			tabBarLabelStyle: {
				color: "#083D77",
				fontWeight: "bold",
				fontSize: 12
			},
			tabBarIcon: ({ color, size }) => (
				<Octicons name="home" size={25} color="#083D77" />
			),
    		headerShown: false,
		}}
		/>

    	<Tabs.Screen 
    	name="all"
    	options={{
    		tabBarLabel: "All notes",
    		tabBarLabelStyle: {
				color: "#083D77",
				fontWeight: "bold",
				fontSize: 12
			},
			tabBarIcon: ({ color, size }) => (
				<Entypo name="list" size={25} color="#083D77" />
			),
    		headerShown: false
    	}}
    	/>

    </Tabs>
  );
}
