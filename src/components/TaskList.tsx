import { FlatList } from "react-native";
import { Task } from "../interfaces";
import { TaskItem } from "./TaskItem";

interface Props {
  tasks: Task[];
}
export const TaskList = ({ tasks }: Props) => {
  return (
    <FlatList
      data={tasks}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id!.toString()}
      renderItem={({ item }) => <TaskItem task={item} />}
    />
  );
};
