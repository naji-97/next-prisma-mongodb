import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())
const globaledForPrisma = global as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") globaledForPrisma.prisma = prisma;

export const Prisma = globaledForPrisma.prisma || prisma;
