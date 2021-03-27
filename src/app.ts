import * as express from "express";
import router from "./router";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";

export const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== "PRODUCTION")
{
    app.use(morgan("dev"));
}

app.use(router);
