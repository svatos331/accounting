// server.js
const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    // Важно: host: '0.0.0.0', чтобы Heroku мог подключаться
    await fastify.listen({ port, host: '0.0.0.0' });
    console.log(`Server listening on ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
