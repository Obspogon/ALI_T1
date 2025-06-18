import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useState } from "react";

const ListScreen = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Text>Transaction</Text>
		</View>
	);
};

export default ListScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 50,
		marginHorizontal: 10,
	},
});
