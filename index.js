const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middewares);
server.use(router);

server.listen(port);
