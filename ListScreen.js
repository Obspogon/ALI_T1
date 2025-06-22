import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

const ListScreen = ({ navigation, route }) => {
	const transactions = [
		{ id: 1, name: "Burger", amount: 10, location: "Burger King", date: "15-3-25", expense: true, category: "Food" },
		{ id: 2, name: "PRESTO", amount: 15, location: "PRESTO Terminal", date: "11-4-25", expense: true, category: "Transportation" },
		{ id: 3, name: "Paycheck", amount: 150, location: "Online", date: "12-4-25", expense: false, category: "Salary" },
	];

	return (
		<View style={styles.container}>
			<Text>Transaction</Text>
			<FlatList
				data={transactions}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								padding: 5,
							}}
						>
							<View>
								<Text style={{ fontSize: 18, fontWeight: "600", color: "#2980b9" }}>{item.name}</Text>
								<Text style={{ fontSize: 16, color: item.expense ? "red" : "green" }}>${item.amount}</Text>
							</View>
							<View>
								<Pressable
									style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "lightblue" : "dodgerblue" }]}
									onPress={() => {
										navigation.navigate("DetailScreen");
									}}
								>
									<Text style={styles.buttonText}>Details</Text>
								</Pressable>
							</View>
						</View>
					);
				}}
				ItemSeparatorComponent={() => {
					return <View style={{ width: "100%", height: "1", backgroundColor: "#2980b9" }} />;
				}}
			/>
			<Pressable
				style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "lightblue" : "dodgerblue" }]}
				onPress={() => {
					navigation.navigate("LoginScreen");
				}}
			>
				<Text style={styles.buttonText}>Logout</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		alignItems: "stretch",
		paddingTop: 50,
		marginHorizontal: 10,
	},
	button: {
		backgroundColor: "dodgerblue",
		padding: 10,
		alignItems: "center",
		alignSelf: "center",
		width: "100%",
		borderRadius: 10,
	},
});

export default ListScreen;
