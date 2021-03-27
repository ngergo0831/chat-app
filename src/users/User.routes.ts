import * as express from "express";
import * as controller from "./User.controller";
const router = express.Router();
export default router;

router.post("/register", controller.register);
router.post("/login", controller.login);
