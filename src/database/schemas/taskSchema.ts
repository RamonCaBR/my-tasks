import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const task = sqliteTable("tasks", {
  id: integer("id").primaryKey(),
  title: text("title").default(""),
  description: text("description").default(""),
  date: text("date").default(""),
  complete: integer("complete").$type<0 | 1>().default(0),
  createdAt: text("createdAt"),
});
