import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import CheckBox from "expo-checkbox";
import Transactions from "./Transactions";

const NewScreen = ({ navigation, route }) => {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState(null);
	const [location, setLocation] = useState("");
	const [date, setDate] = useState("");
	const [expense, setExpense] = useState(true);
	const [category, setCategory] = useState("");

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Text style={styles.inputLabel}>Name</Text>
				<TextInput style={styles.inputStyle} value={name} placeholder="Name" onChangeText={setName} keyboardType="default"></TextInput>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputLabel}>Amount</Text>
				<TextInput style={styles.inputStyle} value={amount} placeholder="$0.00" onChangeText={setAmount} keyboardType="decimal-pad"></TextInput>
			</View>
			<View style={styles.inputContainer}>
				<CheckBox value={expense} onValueChange={setExpense} />
				<Text style={styles.inputLabel}>Expense?</Text>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputLabel}>Location</Text>
				<TextInput style={styles.inputStyle} value={location} placeholder="Location" onChangeText={setLocation} keyboardType="default"></TextInput>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputLabel}>Date</Text>
				<TextInput style={styles.inputStyle} value={date} placeholder="DD-M-YY" onChangeText={setDate} keyboardType="default"></TextInput>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputLabel}>Category</Text>
				<TextInput style={styles.inputStyle} value={category} placeholder="Category" onChangeText={setCategory} keyboardType="default"></TextInput>
			</View>
			<Pressable
				style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "lightblue" : "dodgerblue" }]}
				onPress={() => {
					if (name === "" || amount === null || location === "" || date === "" || category === "") {
						alert("You must fill in all fields.");
					} else {
						let newId = Transactions.length + 10;
						let newTransaction = { id: newId, name: name, amount: amount, location: location, date: date, expense: expense, category: category };
						Transactions.push(newTransaction);
						navigation.replace("ListScreen");
					}
				}}
			>
				<Text style={styles.buttonText}>Add Transaction</Text>
			</Pressable>
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
	inputContainer: {
		flexDirection: "column",
		width: "100%",
		paddingVertical: 10,
	},
	inputLabel: {
		fontSize: 15,
		padding: 5,
	},
	inputStyle: {
		fontSize: 20,
		borderColor: "dodgerblue",
		borderWidth: 2,
		padding: 5,
		height: 50,
		width: "95%",
		borderRadius: 5,
	},
	button: {
		backgroundColor: "dodgerblue",
		padding: 10,
		alignItems: "center",
		alignSelf: "center",
		width: "100%",
		borderRadius: 10,
	},
	textStyle: { fontSize: 16 },
});

export default NewScreen;
