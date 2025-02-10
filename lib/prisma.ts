/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).prisma = db;
}
