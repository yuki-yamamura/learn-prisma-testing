import { prismaClient } from "@/infrastructure/prisma/client";
import { ActorRepository } from "@/infrastructure/repositories/actors/actor-repository";

export class ActorCommand {
  async save() {
    await prismaClient.$transaction(async (tx) => {
      const repository = new ActorRepository(tx);
      await repository.save({
        firstName: "Bob",
        lastName: "Doe",
      });
      await repository.save({
        firstName: "Alice",
        lastName: "Carroll",
      });
    });
  }
}
