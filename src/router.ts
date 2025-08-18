import { FastifyInstance } from "fastify";
import userController from "./controller/userController";
import indexController from "./controller/indexController";
import analyzeExelController from "./controller/analyzeExelController";

export default async function router(fastify: FastifyInstance) {
  fastify.register(userController, { prefix: "/api/v1/user" });
  fastify.register(analyzeExelController, { prefix: "/api/v1/analyzeExel" });
  fastify.register(indexController, { prefix: "/" });
}
