import { PrismaClient } from './dbSource'
const prisma = new PrismaClient()

export const db = prisma;