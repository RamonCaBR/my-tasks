import { View } from "react-native";
import TasksSection from "../components/TasksSection";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TasksSection />
    </View>
  );
}
