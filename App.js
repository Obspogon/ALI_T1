import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import ListScreen from "./ListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	const headerOption = () => ({
		headerStyle: { backgroundColor: "#10ac84" },
		headerTintColor: "white",
		headerTitleStyle: { fontWeight: "bold" },
	});

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="LoginScreen">
				<Stack.Group screenOptions={headerOption}>
					<Stack.Screen component={LoginScreen} name="LoginScreen" />
					<Stack.Screen component={ListScreen} name="ListScreen" />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
