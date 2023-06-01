import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const TaskLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 20,
  },
});
