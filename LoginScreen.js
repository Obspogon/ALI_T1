import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useState } from "react";

const LoginScreen = ({ navigation, route }) => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Financia</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.inputLabel}>Email</Text>
				<TextInput style={styles.inputStyle} value={email} placeholder="Email" onChangeText={setEmail} keyboardType="default" autoCorrect={false}></TextInput>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputLabel}>Password</Text>
				<TextInput style={styles.inputStyle} value={pass} placeholder="Password" onChangeText={setPass} keyboardType="default" autoCorrect={false}></TextInput>
			</View>
			<Pressable
				style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "lightblue" : "dodgerblue" }]}
				onPress={() => {
					if (email === "test@senecapolytechnic.ca" && pass === "test123") alert("Login.");
					else alert("No user found with those credentials.");
				}}
			>
				<Text style={styles.buttonText}>Login</Text>
			</Pressable>
			<StatusBar style="auto" />
		</View>
	);
};

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
	title: {
		fontSize: 25,
		fontWeight: "bold",
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
});

export default LoginScreen;
