import jsonServer from "json-server";
import dotenv from "dotenv";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
dotenv.config();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port);
