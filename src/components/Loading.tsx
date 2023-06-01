import { ActivityIndicator, StyleSheet } from "react-native";

export const Loading = () => {
  return <ActivityIndicator style={style.loading} size="large" />;
};

const style = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
