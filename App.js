import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import ListScreen from "./ListScreen";
import DetailScreen from "./DetailScreen";
import NewScreen from "./NewScreen";

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
					<Stack.Screen component={DetailScreen} name="DetailScreen" />
					<Stack.Screen component={NewScreen} name="NewScreen" />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
