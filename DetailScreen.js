import { StyleSheet, Text, View } from "react-native";

const DetailScreen = ({ navigation, route }) => {
	const { id, name, amount, location, date, category, expense } = route.params;
	return (
		<View style={styles.container}>
			<Text style={{ color: expense ? "red" : "green", fontSize: 70 }}>${amount}</Text>
			<Text style={{ fontSize: 30, fontVariant: "bold" }}>{name}</Text>
			<Text style={styles.textStyle}>{location}</Text>
			<Text style={styles.textStyle}>{date}</Text>
			<Text style={styles.textStyle}>{category}</Text>
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
	textStyle: { fontSize: 16 },
});

export default DetailScreen;
