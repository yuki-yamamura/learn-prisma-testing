import type { PrismaClient } from "@prisma/client";
import { PrismaEnvironmentDelegate } from "@quramy/jest-prisma-core";

declare global {
  var vPrismaDelegate: PrismaEnvironmentDelegate;
  var vPrisma: {
    client: PrismaClient;
  };
}
