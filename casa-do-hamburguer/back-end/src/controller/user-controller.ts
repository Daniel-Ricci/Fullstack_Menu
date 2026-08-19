import { type Request, type Response } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({ message: "E-mail and password required." });
      return;
    }

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      res.status(401).json({ message: "Incorrect password." });
      return;
    }

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      zip: user.zip,
    };

    if (!process.env.JWT_SECRET) {
      return;
    }

    const token = jwt.sign(userData, process.env.JWT_SECRET);

    res.cookie("user", token, {
      maxAge: 900000,
    });

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
    return;
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, zip } = req.body;

    if (!(name && email && password && zip)) {
      res.status(400).json({
        message: "Missing information required for registering new user.",
      });
      return;
    }

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (user?.email) {
      res.status(409).json({ message: "E-mail already registered." });
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { name: name, email: email, password: hash, zip: zip },
    });

    res.status(201).json({ message: "User registered succesfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
    return;
  }
};
