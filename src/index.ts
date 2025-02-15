import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { ActorQuery } from "./application/actors/query.js";

const app = new Hono();

app.get("/", async (c) => {
  const actorQuery = new ActorQuery();
  const actors = await actorQuery.findAll();

  return c.json(actors);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
