import { Task } from "@/src/@types/models/Task";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import styles from "./style";

type TaskCardProps = Task;

export default function TaskCard({
  title,
  description,
  date,
  id,
}: TaskCardProps) {
  const formatedDate = new Date(date as string).toLocaleDateString("pt-br", {
    dateStyle: "medium",
  });

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => router.navigate({ pathname: "/task", params: { id: id } })}
    >
      <Text style={styles.title}>{!!title ? title : "(Sem título)"}</Text>
      {!!description && <Text style={styles.decription}>{description}</Text>}
      {!!date && <Text style={styles.date}>{formatedDate}</Text>}
    </Pressable>
  );
}
