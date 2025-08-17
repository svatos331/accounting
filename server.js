// server.js
const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {

  console.log(request);
  return { hello: 'world123' };
});

fastify.post('/', async (request, reply) => {
  const body = request.body;
  console.log('Received body:', body);
  return { received: body };
});

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await fastify.listen({ port, host: '0.0.0.0' });
    console.log(`Server listening on ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
