import express from "express";
import cors from "cors";
import { Connect } from "./src/db.js";
import { prisma } from "./src/db.js";

const app = express();
app.use(express.json());
app.use(cors());
Connect();

app.post("/login", async (req, res) => {
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

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
