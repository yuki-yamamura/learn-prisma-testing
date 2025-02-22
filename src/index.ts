import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { ActorCommand } from "./application/actors/command.js";

const app = new Hono();

app.get("/", async (c) => {
  const actorQuery = new ActorCommand();
  const actors = await actorQuery.save();

  return c.json(actors);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
