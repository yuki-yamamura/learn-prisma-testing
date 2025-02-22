import { ActorRepository } from "@/infrastructure/repositories/actors";
import { prismaClient } from "@/infrastructure/prisma/client";
import {
  actorDefaultAttributes,
  actorFactory,
} from "@/__tests__/factories/actor";

const actorRepository = new ActorRepository(prismaClient);

describe("ActorRepository", () => {
  test("should save an actor", async () => {
    // act
    await actorRepository.save(actorDefaultAttributes);

    // assert
    const actors = await prismaClient.actor.findMany();
    expect(actors).toHaveLength(1);
    expect(actors.at(0)?.firstName).toEqual(actorDefaultAttributes.firstName);
    expect(actors.at(0)?.lastName).toEqual(actorDefaultAttributes.lastName);
  });

  test("should update an actor", async () => {
    // arrange
    const actor = await actorFactory.create();

    // act
    await actorRepository.update(actor.actorId, {
      firstName: actorDefaultAttributes.firstName,
    });

    // assert
    expect(
      await prismaClient.actor.findUnique({
        where: {
          actorId: actor.actorId,
        },
      })
    ).toEqual({
      ...actor,
      firstName: actorDefaultAttributes.firstName,
    });
  });
});
