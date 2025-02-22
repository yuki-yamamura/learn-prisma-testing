import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
  log: ["query", "info", "warn", "error"],
});
