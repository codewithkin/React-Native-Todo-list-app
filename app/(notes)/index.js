import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import TopBar from "../../components/TopBar";
import Date from "../../components/Date";
import { Animated, SlideInRight, SlideOutLeft } from "react-native-reanimated";

export default function Dashboard() { 
	return (
		<View 
			entering={SlideInRight}
			exiting={SlideOutLeft}
			style={styles.container}>
      <View>
        <TopBar />
      </View>

      <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20, borderTopLeftRadius: 25,width: "100%",height: "100%", backgroundColor: "#fff", flexDirection: "row",alignItems: "center", height: 120, }}>
        <Date />
        <View>
          <Text
            style={{
              color: "#083D77",
              fontWeight: "bold", 
              fontSize: 20,
              marginLeft: 20,
            }}
          >No tasks for today</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
	)
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: "column",
    backgroundColor: "#083D77",
  },
});
