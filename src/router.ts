import * as express from "express";
import userRouter from "./users/User.routes";
import messageRouter from "./messages/Message.routes";
const router = express.Router();
export default router;

router.get("/", (req, res) => {
    res.end();
});

router.use(userRouter);

router.use(messageRouter);
