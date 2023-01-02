import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StudentScreen from "./components/Studentscreen";
import TeacherScreen from "./components/Teacherscreen";
import EmployeScreen from "./components/EmployeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Student" component={StudentScreen} />
      <Tab.Screen name="Teacher" component={TeacherScreen} />
      <Tab.Screen name="Employe" component={EmployeScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}