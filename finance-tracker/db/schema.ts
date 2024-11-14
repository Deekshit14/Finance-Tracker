import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
     id: text("id").primaryKey(),
     plaidId: text("plaid_id"),
     name: text("name").notNull(),
     userId: text("user_id").notNull(),
})
// "db:generate": "drizzle-kit generate:pg --schema db/schema.ts --out ./drizzle",
//     "db:migrate": "tsx ./scripts/migrate.ts",
//     "db:studio": "drizzle-kit studio"