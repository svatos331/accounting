import app from "./app";

const FASTIFY_PORT = Number(process.env.PORT) || 3000;

app.listen({ port: FASTIFY_PORT, host: "0.0.0.0" });
