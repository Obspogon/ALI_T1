import { useState } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Transactions from "./Transactions";

const ListScreen = ({ navigation, route }) => {
	const [transactions, setTransactions] = useState(Transactions);

	let total = 0.0;
	transactions.forEach((item) => {
		total = item.expense ? total - item.amount : total + item.amount;
	});
	total = parseFloat(total).toFixed(2);

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20 }}>Total: ${total}</Text>
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
									style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "red" : "orangered" }]}
									onPress={() => {
										setTransactions(
											transactions.filter((t) => {
												return t.id !== item.id;
											})
										);
										navigation.navigate("ListScreen");
									}}
								>
									<Text style={styles.buttonText}>Delete</Text>
								</Pressable>
								<Pressable
									style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "lightblue" : "dodgerblue" }]}
									onPress={() => {
										navigation.navigate("DetailScreen", {
											id: item.id,
											name: item.name,
											amount: item.amount,
											expense: item.expense,
											location: item.location,
											date: item.date,
											category: item.category,
										});
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
					navigation.navigate("NewScreen");
				}}
			>
				<Text style={styles.buttonText}>New Transaction</Text>
			</Pressable>
			<Pressable
				style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "lightblue" : "dodgerblue" }]}
				onPress={() => {
					navigation.replace("LoginScreen");
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
		padding: 10,
		alignItems: "center",
		alignSelf: "center",
		width: "100%",
		borderRadius: 10,
	},
});

export default ListScreen;
