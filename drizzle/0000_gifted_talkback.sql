CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text DEFAULT '',
	`description` text DEFAULT '',
	`date` text DEFAULT '',
	`complete` integer DEFAULT 0,
	`createdAt` text
);
