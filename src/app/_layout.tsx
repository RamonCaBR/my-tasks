import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../drizzle/migrations";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import TaskProvider from "../providers/TaskContext";

const DATABASE_NAME = "database.db";
const expoDb = openDatabaseSync(DATABASE_NAME);
const db = drizzle(expoDb);

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);

  useDrizzleStudio(expoDb);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return (
    <SQLiteProvider databaseName={DATABASE_NAME}>
      <TaskProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Tarefas", headerShadowVisible: false }}
          />
          <Stack.Screen
            name="task"
            options={{ headerTitle: "", headerShadowVisible: false }}
          />
        </Stack>
      </TaskProvider>
    </SQLiteProvider>
  );
}
