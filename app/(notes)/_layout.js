import { Tabs } from "expo-router/tabs";

export default function App() {
  return (
    <Tabs>
    	<Tabs.Screen 
		name="index" 
		options={{
			tabBarLabel: "Dashboard",
    		headerShown: false
		}}
		/>

    	<Tabs.Screen 
    	name="all" 
    	options={{
    		tabBarLabel: "All notes",
    		headerShown: false
    	}}
    	/>
    </Tabs>
  );
}
