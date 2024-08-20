import { createContext, useContext, useEffect, useState } from "react";
import { TaskContext, TaskProviderProps, Tasks } from "./@types";
import { useSQLiteContext } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as taskSchema from "@/src/database/schemas/taskSchema";
import { Task } from "@/src/@types/models/Task";
import { eq } from "drizzle-orm";

const taskContext = createContext<TaskContext>({} as TaskContext);

export const useTaskContext = () => {
  return useContext(taskContext);
};

export default function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Tasks>([] as Tasks);
  const database = useSQLiteContext();
  const db = drizzle(database, { schema: taskSchema });

  useEffect(() => {
    async function loadTasks() {
      const result = await db.select().from(taskSchema.task);

      setTasks([...result]);
    }

    loadTasks();
  }, []);

  async function addTask(data: Task) {
    const result = await db
      .insert(taskSchema.task)
      .values({
        ...data,
        createdAt: new Date().toString(),
      })
      .returning();

    setTasks([...tasks, ...result]);
  }

  async function getTask(id: number) {
    const result = await db.query.task.findFirst({
      where: eq(taskSchema.task.id, id),
    });

    return result;
  }

  async function updateTask(data: Task, id: number) {
    const result = await db
      .update(taskSchema.task)
      .set(data)
      .where(eq(taskSchema.task.id, id))
      .returning();

    const newTasks = tasks.map((task) => {
      if (task.id == id) return result[0];
      return task;
    });

    setTasks(newTasks);
  }

  async function deleteTask(id: number) {
    await db.delete(taskSchema.task).where(eq(taskSchema.task.id, id));

    const newTasks = tasks.filter((task) => task.id != id);

    setTasks(newTasks);
  }

  return (
    <taskContext.Provider
      value={{ tasks, addTask, getTask, updateTask, deleteTask }}
    >
      {children}
    </taskContext.Provider>
  );
}
