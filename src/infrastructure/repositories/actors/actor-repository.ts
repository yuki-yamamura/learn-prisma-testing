import type { Actor, Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma/client.js";

export class ActorRepository {
  async findAll() {
    return prismaClient.actor.findMany({
      include: {
        filmActor: {
          include: {
            film: true,
          },
        },
      },
    });
  }

  async findById(id: Actor["actorId"]) {
    return prismaClient.actor.findUnique({
      where: {
        actorId: id,
      },
    });
  }

  async save(actor: Prisma.ActorCreateInput) {
    prismaClient.actor.create({
      data: actor,
    });
  }

  async update(id: Actor["actorId"], actor: Prisma.ActorUpdateInput) {
    prismaClient.actor.update({
      where: {
        actorId: id,
      },
      data: actor,
    });
  }
}
