import { useTaskContext } from "@/src/providers/TaskContext";
import { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export type EditTaskProps = {
  id: number;
};

export default function EditTaskForm({ id }: EditTaskProps) {
  const [selectDate, setSelectDate] = useState(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<string>();
  const [complete, setComplete] = useState<boolean>(false);
  const { tasks, updateTask, deleteTask } = useTaskContext();

  async function handleUpdate() {
    await updateTask({ title, description, date }, id);
    router.navigate("/");
  }

  async function handleComplete() {
    const parseComplete = !!complete ? 0 : 1;

    await updateTask({ complete: parseComplete }, id);
    router.navigate("/");
  }

  async function handleDelete() {
    await deleteTask(id);
    router.navigate("/");
  }

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id == +id) as any;

    setTitle(foundTask.title);
    setDescription(foundTask.description);
    setDate(foundTask.date);
    setComplete(!!foundTask.complete);
  }, []);

  const formatedDate = new Date(date as string).toLocaleDateString("pt-br", {
    dateStyle: "medium",
  });

  return (
    <View style={styles.formContainer}>
      <TouchableOpacity
        style={styles.deleteTaskButton}
        onPress={() => handleDelete()}
      >
        <Text>Excluir</Text>
      </TouchableOpacity>
      {!selectDate ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.dateContainer}>
            <Pressable
              style={styles.dateButton}
              onPress={() => setSelectDate(true)}
            >
              <FontAwesome name="calendar" size={24} />
              <Text>{!!date ? formatedDate : "Adicionar data"}</Text>
            </Pressable>
            {!!date && (
              <Pressable
                style={styles.deleteDateButton}
                onPress={() => setDate("")}
              >
                <FontAwesome name="trash-o" size={18} />
              </Pressable>
            )}
          </View>
          <Button
            title="Salvar"
            color={"black"}
            onPress={() => handleUpdate()}
          />
        </>
      ) : (
        <DateTimePicker
          mode="single"
          selectedItemColor="black"
          onChange={({ date }) => {
            const currentData = String(new Date(date as Date));
            setDate(currentData);
            setSelectDate(false);
          }}
        />
      )}
      <TouchableOpacity
        style={styles.completeTaskButton}
        onPress={() => handleComplete()}
      >
        <Text style={styles.completeTaskText}>
          {complete ? "Marcar como não concluída" : "Marcar como concluída"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
