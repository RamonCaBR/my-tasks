import { useTaskContext } from "@/src/providers/TaskContext";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import styles from "./style";

type CreateTaskFormProps = {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateTaskForm({
  setModalVisible,
}: CreateTaskFormProps) {
  const [selectDate, setSelectDate] = useState(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [date, setDate] = useState<string>("");
  const { addTask } = useTaskContext();

  async function handleAdd() {
    await addTask({ title, description, date });
    setModalVisible(false);
  }

  const formatedDate = new Date(date as string).toLocaleDateString("pt-br", {
    dateStyle: "medium",
  });

  return (
    <>
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
          <Button color={"black"} title="Criar" onPress={() => handleAdd()} />
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
    </>
  );
}
