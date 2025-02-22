import { prismaClient } from "@/infrastructure/prisma/client";

const { ActorCommand } = await import("./command.js");

describe("ActorCommand", () => {
  test("should save an actor", async () => {
    // arrange
    const actorCommand = new ActorCommand();

    // act
    await actorCommand.save();

    // assert
    const actors = await prismaClient.actor.findMany();
    expect(actors).toHaveLength(2);
  });
});
