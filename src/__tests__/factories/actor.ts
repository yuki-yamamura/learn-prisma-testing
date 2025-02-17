import { Prisma, type Actor } from "@prisma/client";
import { createFactory } from "../helpers/factory.js";

export const actorDefaultAttributes: Prisma.ActorCreateInput = {
  firstName: "John",
  lastName: "Doe",
};

export const actorFactory = createFactory<Actor, Prisma.ActorCreateInput>(
  "Actor",
  actorDefaultAttributes
);
