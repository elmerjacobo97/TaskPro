import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Task } from "../interfaces";
import { formatDate } from "../utils";

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  const { title, description, completed, createdAt } = task;

  return (
    <View style={[styles.container, completed && styles.completedContainer]}>
      <Text style={[styles.title, completed && styles.completedTitle]}>
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.createdAt}>{formatDate(createdAt)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  completedContainer: {
    backgroundColor: "#C8E6C9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333333",
  },
  completedTitle: {
    textDecorationLine: "line-through",
  },
  description: {
    fontSize: 16,
    color: "#555555",
  },
  createdAt: {
    fontSize: 12,
    color: "#888888",
    marginTop: 8,
  },
});
