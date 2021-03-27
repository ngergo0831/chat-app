import * as express from "express";
import router from "./router";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm";

process.env.SECRET = "very-secret-key";

export const app = express();

app.use(bodyParser.json());

createConnection({
    type: "sqlite",
    database: "db.sqlite",
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
});

if (process.env.NODE_ENV !== "PRODUCTION") {
    app.use(morgan("dev"));
}

app.use(router);
