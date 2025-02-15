import { ActorRepository } from "../../infrastructure/repositories/actors/actor-repository.js";

export class ActorQuery {
  async findAll() {
    const repository = new ActorRepository();

    return repository.findAll();
  }
}
