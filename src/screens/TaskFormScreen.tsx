import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Task } from "../interfaces";
import { useCreateTask } from "../hooks";
import { RouteStackParams } from "../navigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface Props extends NativeStackScreenProps<RouteStackParams, "TaskForm"> {}

export const TaskFormScreen = ({ navigation }: Props) => {
  const [task, setTask] = useState<Task>({ title: "", description: "" });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { error, createTask } = useCreateTask();

  const handleCreateTask = async () => {
    await createTask(task);
  };

  const handleInputChange = (field: keyof typeof task, text: string) => {
    setTask((prevTask) => ({
      ...prevTask,
      [field]: text,
    }));
  };

  useEffect(() => {
    setIsButtonDisabled(
      task.title.trim() === "" || task.description.trim() === ""
    );
  }, [task]);

  useEffect(() => {
    if (task) {
      setTask({ title: "", description: "" });
      navigation.navigate("Home");
    }
  }, [task]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={styles.input}
        value={task.title}
        onChangeText={(text) => handleInputChange("title", text)}
        placeholder="Introduce el título de la tarea"
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={task.description}
        onChangeText={(text) => handleInputChange("description", text)}
        placeholder="Introduce la descripción de la tarea"
        multiline
      />

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.disabledButton]}
        onPress={handleCreateTask}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Crear Tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2979FF",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
