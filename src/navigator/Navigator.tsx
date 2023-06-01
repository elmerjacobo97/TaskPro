import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, TaskFormScreen } from "../screens";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

// Definir screens y argumentos que reciben
export type RouteStackParams = {
  Home: undefined;
  TaskForm: undefined;
};

const Stack = createNativeStackNavigator<RouteStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: "#2979FF",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => {
          if (route.name === "Home") {
            return (
              <TouchableOpacity
                style={styles.addButton}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("TaskForm")}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            );
          }
          return null;
        },
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Tareas" }}
      />
      <Stack.Screen
        name="TaskForm"
        component={TaskFormScreen}
        options={{ title: "Crear Tarea" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    marginRight: 10,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});
