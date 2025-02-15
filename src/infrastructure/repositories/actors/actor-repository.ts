import { prismaClient } from "../../prisma/client.js";

export class ActorRepository {
  async findAll() {
    return prismaClient.actor.findMany();
  }
}
