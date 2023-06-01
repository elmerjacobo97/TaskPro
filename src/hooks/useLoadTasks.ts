import { useEffect, useState } from "react";
import { Task } from "../interfaces";
import { taskApi } from "../api";

export const useLoadTasks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    try {
      const { data } = await taskApi.get<Task[]>("/tasks");
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error al cargar las tareas", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return {
    isLoading,
    tasks,
  };
};
