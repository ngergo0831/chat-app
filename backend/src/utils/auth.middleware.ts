import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export async function auth(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
        return res.status(401).json("No authentication header");
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    try {
        const payload = jwt.verify(token, process.env.SECRET as string) as any;
        (req as any).userId = payload.uid;
        next();
    } catch (error) {
        return res.status(401).json("Invalid authorization header");
    }
}
