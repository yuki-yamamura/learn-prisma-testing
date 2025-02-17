import { prismaMock } from "../../../__tests__/prisma/client.js";
import { Prisma, type Actor } from "@prisma/client";
import { ActorRepository } from "./actor-repository.js";
import { createFactory } from "../../../__tests__/helpers/factory.js";
import { actorFactory } from "../../../__tests__/factories/actor.js";

const factory = createFactory<Actor, Prisma.ActorCreateInput>("Actor", {
  firstName: "John",
  lastName: "Doe",
});
const actorRepository = new ActorRepository();

describe("ActorRepository", () => {
  test("should return all the actors with their films", async () => {
    // act
    await actorRepository.findAll();

    // assert
    expect(prismaMock.actor.findMany).toHaveBeenCalledWith({
      include: {
        filmActor: {
          include: {
            film: true,
          },
        },
      },
    });
  });

  test("should return an actor by id", async () => {
    // arrange
    const fakeActor = await factory.create({
      firstName: "Hoge",
    });

    // act
    await actorRepository.findById(fakeActor.actorId);

    expect(prismaMock.actor.findUnique).toHaveBeenCalledWith({
      where: {
        actorId: fakeActor.actorId,
      },
    });
  });

  test("should save an actor", async () => {
    // arrange
    const fakeActor = await factory.create({
      firstName: "Hoge",
    });

    // act
    await actorRepository.save(fakeActor);

    // assert
    expect(prismaMock.actor.create).toHaveBeenCalledWith({
      data: fakeActor,
    });
  });

  test("should update an actor", async () => {
    // arrange
    const fakeActor = await factory.create({
      firstName: "Hoge",
    });

    // act
    await actorRepository.update(fakeActor.actorId, {
      firstName: "Fuga",
    });

    // assert
    expect(prismaMock.actor.update).toHaveBeenCalledWith({
      where: {
        actorId: fakeActor.actorId,
      },
      data: {
        firstName: "Fuga",
      },
    });

    console.log(await actorFactory.create());
  });
});
