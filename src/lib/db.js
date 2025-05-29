import { PrismaClient } from "../../generated/prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (!globalThis.prisma) globalThis.prisma = db;
