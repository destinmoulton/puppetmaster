const fastify = require("fastify")();
const pov = require("point-of-view");
const nunjucks = require("nunjucks");

fastify.register(pov, {
    engine: {
        nunjucks,
    },
});

fastify.get("/", (req, reply) => {
    reply.view("/public/templates/index.njk");
});

fastify.listen(3900, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${fastify.server.address().port}`);
});
