import { useState } from "react";
import { Task } from "../interfaces";
import { taskApi } from "../api";

export const useCreateTask = () => {
  const [error, setError] = useState<string | null>(null);

  const createTask = async (taskData: Task) => {
    setError(null);

    try {
      await taskApi.post("/tasks", taskData);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { error, createTask };
};
