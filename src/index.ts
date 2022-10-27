import express, { Express } from "express";
import dotenv from "dotenv";
import Router from "./handlers/router.handler";
import { routers } from "./routers";
import helmet from "helmet";
import morgan from "morgan";
import bodyparser from "body-parser";

dotenv.config();

const app: Express = express();
app.use(helmet());
app.use(morgan("combined"));
app.use(bodyparser({
  extended: true
}));

const routerHandler = new Router(app);

routers.forEach((route) => {
  routerHandler.registerRouter(route);
});

routerHandler.run();

