CREATE TABLE `todos` (
	`id` integer PRIMARY KEY NOT NULL,
	`text` text NOT NULL,
	`completed` integer DEFAULT false NOT NULL
);
