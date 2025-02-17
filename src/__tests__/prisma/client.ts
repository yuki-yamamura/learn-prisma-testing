import { PrismaClient } from "@prisma/client";
import { mockDeep, type DeepMockProxy } from "vitest-mock-extended";
import { prismaClient } from "../../infrastructure/prisma/client.js";

vi.mock("../../infrastructure/prisma/client.js", () => {
  return {
    __esModule: true,
    prismaClient: mockDeep<PrismaClient>(),
  };
});

export const prismaMock =
  prismaClient as unknown as DeepMockProxy<PrismaClient>;
