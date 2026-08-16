import express, { type Request, type Response } from "express";
import cors from "cors";
import { Connect } from "./src/db.js";
import { prisma } from "./src/db.js";

const app = express();
app.use(express.json());
app.use(cors());
Connect();

app.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({ message: "E-mail and password required." });
      return;
    }

    const user = await prisma.user.findFirst({
      where: { email: email, password: password },
    });

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
    return;
  }
});

app.post("/register", async (req: Request, res: Response) => {
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

    const newUser = await prisma.user.create({
      data: { name: name, email: email, password: password, zip: zip },
    });

    res.status(201).json({ message: "User registered succesfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
    return;
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
