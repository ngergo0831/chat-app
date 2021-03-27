import { Request, Response } from "express";
import { User } from "./User.entity";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";

export async function register(req: Request, res: Response) {
    if (!req.body.name) {
        //return res.status(400).json("Name is mandatory.");
    }

    if (!req.body.email) {
        return res.status(400).json("Email is mandatory.");
    }

    if (!req.body.password) {
        return res.status(400).json("Password is mandatory.");
    }

    let exists = await User.findOne({ where: { email: req.body.email } });
    if (!exists) {
        return res.status(400).json("Email is already registered.");
    }

    const user = User.create(req.body as Object);

    user.password = crypto
        .createHash("sha512")
        .update(user.password)
        .digest("hex");

    await user.save();

    res.json(user);
}

export async function login(req: Request, res: Response) {
    const passwordHash = crypto
        .createHash("sha512")
        .update(req.body.password)
        .digest("hex");

    const usr = await User.findOne({
        where: {
            email: req.body.email,
            password: passwordHash,
        },
    });

    if (!usr) {
        return res.status(401).json("No user with these credentials found.");
    }

    const token = jwt.sign(
        {
            uid: usr.id,
        } as Object,
        process.env.SECRET as string
    );

    res.json(token);
}
