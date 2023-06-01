import { useLoadTasks } from "../hooks";
import { Loading, TaskList } from "../components";
import { TaskLayout } from "../layout";

export const HomeScreen = () => {
  const { isLoading, tasks } = useLoadTasks();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <TaskLayout>
      <TaskList tasks={tasks} />
    </TaskLayout>
  );
};
