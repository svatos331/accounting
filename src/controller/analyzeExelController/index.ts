import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IAnalyzeExelRequest } from "./types";
import checkData from "../../modules/checkData";

export default async function analyzeExelController(fastify: FastifyInstance) {
  fastify.post(
    "/",
    async function (
      _request: FastifyRequest<{ Body: IAnalyzeExelRequest[] }>,
      reply: FastifyReply,
    ) {
      const { fixedData, nonFixedData } = checkData(_request.body);

      console.log(fixedData, nonFixedData, _request.body);

      reply.send({ fixedData, nonFixedData, body: _request.body });
    },
  );
}
