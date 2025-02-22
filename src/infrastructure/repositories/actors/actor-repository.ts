import { Prisma, PrismaClient, type Actor } from "@prisma/client";

export class ActorRepository {
  constructor(private prismaClient: PrismaClient | Prisma.TransactionClient) {}
  async findAll() {
    return this.prismaClient.actor.findMany({
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
    return this.prismaClient.actor.findUnique({
      where: {
        actorId: id,
      },
    });
  }

  async save(actor: Prisma.ActorCreateInput) {
    return this.prismaClient.actor.create({
      data: actor,
    });
  }

  async update(id: Actor["actorId"], actor: Prisma.ActorUpdateInput) {
    return this.prismaClient.actor.update({
      where: {
        actorId: id,
      },
      data: actor,
    });
  }
}
