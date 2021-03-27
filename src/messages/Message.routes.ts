import * as express from "express";
import { auth } from "../utils/auth.middleware";
import * as controller from "./Message.controller";
const router = express.Router();
export default router;

router.get("/messages", auth, controller.list);
