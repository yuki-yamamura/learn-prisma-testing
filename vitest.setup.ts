import { mockReset } from "vitest-mock-extended";
import { prismaMock } from "./src/__tests__/prisma/client.js";

beforeEach(() => {
  mockReset(prismaMock);
});
