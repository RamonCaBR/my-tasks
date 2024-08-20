import { task } from "@/src/database/schemas/taskSchema";
import { InferInsertModel } from "drizzle-orm";

export type Task = InferInsertModel<typeof task>;
