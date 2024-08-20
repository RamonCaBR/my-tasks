import { Task } from "@/src/@types/models/Task";
import React from "react";

export type TaskProviderProps = {
  children: React.ReactNode;
};

export type TaskContext = {
  tasks: Task[];
  addTask(data: Task): Promise<void>;
  getTask(id: number): Promise<Task | undefined>;
  updateTask(data: Task, id: number): Promise<void>;
  deleteTask(id: number): Promise<void>;
};

export type Tasks = Task[];
