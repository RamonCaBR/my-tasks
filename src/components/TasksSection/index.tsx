import { useTaskContext } from "@/src/providers/TaskContext";
import { FlatList, Pressable, Text, View } from "react-native";
import TaskCard from "./TaskCard";
import styles from "./style";
import { FontAwesome6 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import CreateTaskModal from "../modals/CreateTaskModal";
import { Tasks } from "@/src/providers/TaskContext/@types";

export default function TasksSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [toComplete, setToComplete] = useState<Tasks>([] as Tasks);
  const [completed, setCompleted] = useState<Tasks>([] as Tasks);

  const { tasks } = useTaskContext();

  useEffect(() => {
    function loadCompleted() {
      const toCompleteTasks = tasks.filter((task) => !!!task.complete);
      const completedTasks = tasks.filter((task) => !!task.complete);

      setToComplete(toCompleteTasks);
      setCompleted(completedTasks);
    }

    loadCompleted();
  }, [tasks]);

  return (
    <View style={styles.sectionContainer}>
      <View>
        {toComplete.length > 0 ? (
          <FlatList
            data={toComplete}
            renderItem={({ item }) => {
              return (
                <TaskCard
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  id={item.id}
                />
              );
            }}
            keyExtractor={(task) => String(task.id)}
          />
        ) : (
          <Text>
            {completed.length > 0
              ? "Todas as tarefas foram concluídas"
              : "Nenhuma tarefa"}
          </Text>
        )}
      </View>
      {completed.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Concluídas</Text>

          <View>
            <FlatList
              data={completed}
              renderItem={({ item }) => {
                return (
                  <TaskCard
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    id={item.id}
                  />
                );
              }}
              keyExtractor={(task) => String(task.id)}
            />
          </View>
        </>
      )}
      <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
        <FontAwesome6 name="plus" size={30} color="white" />
      </Pressable>
      <CreateTaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
