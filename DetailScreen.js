import { StyleSheet, Text, View, Pressable } from "react-native";

const DetailScreen = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.amountStyle}>$50.00</Text>
			<Text style={styles.nameStyle}>Name</Text>
			<Text style={styles.textStyle}>Location</Text>
			<Text style={styles.textStyle}>Date</Text>
			<Text style={styles.textStyle}>Cat</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 10,
		marginHorizontal: 10,
	},
	amountStyle: { fontSize: 70 },
	nameStyle: { fontSize: 30, fontVariant: "bold" },
	textStyle: { fontSize: 16 },
	button: {
		backgroundColor: "dodgerblue",
		padding: 10,
		alignItems: "center",
		alignSelf: "center",
		width: "100%",
		borderRadius: 10,
	},
});

export default DetailScreen;
