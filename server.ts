let Fastify = require('fastify');
let next = require('next');
let {FastifyRequest,FastifyReply} = require("fastify")
const fastify = Fastify({ logger: true });
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const start = async () => {
    try {
        await app.prepare();

        // Define a Fastify route
        fastify.get('*', (req: { raw: any; }, reply: { raw: any; sent: boolean; }) => {
            return handle(req.raw, reply.raw).then(() => {
                reply.sent = true;
            });
        });
        fastify.get('/data', (req: { raw: any; }, reply: { raw: any; sent: boolean; }) => {
            return handle(req.raw, reply.raw).then(() => {
                reply.sent = true;
            });
        });
        // Start Fastify server
        await fastify.listen({ port: 3000 });
        console.log(`> Server is ready on http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
