import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { useTaskContext } from "../providers/TaskContext";
import { useEffect, useState } from "react";
import { Task } from "../@types/models/Task";
import EditTaskForm from "../components/Forms/EditTaskForm/EditTaskForm";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const [task, setTask] = useState<Task>();

  const { tasks } = useTaskContext();

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id == +id);
    setTask(foundTask);
  }, []);

  return (
    <View>
      <EditTaskForm id={+id} />
    </View>
  );
}
