import { prismaMock } from "../../../__tests__/prisma/client.js";
import type { Actor } from "@prisma/client";
import { ActorRepository } from "./actor-repository.js";

describe("ActorRepository", () => {
  test("should return all actors", async () => {
    // arrange
    const fakeActors = [
      { actorId: 1, firstName: "John Doe" },
      { actorId: 2, firstName: "Jane Doe" },
    ] as Actor[];
    prismaMock.actor.findMany.mockResolvedValue(fakeActors);

    // act
    const actorRepository = new ActorRepository();
    const actors = await actorRepository.findAll();

    // assert
    expect(actors).toEqual(fakeActors);
  });

  test("should return actors matching the query", async () => {
    // arrange
    const fakeActors = [{ actorId: 1, firstName: "John Doe" }] as Actor[];
    prismaMock.actor.findMany.mockResolvedValue(fakeActors);

    // act
    const actorRepository = new ActorRepository();
    const actors = await actorRepository.findAll();

    // assert
    expect(actors).toEqual(fakeActors);
  });
});
