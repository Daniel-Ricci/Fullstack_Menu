import express from "express";
import { Connect } from "./src/db.js";
import { prisma } from "./src/db.js";

const app = express();
app.use(express.json());
Connect();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: { email: email, password: password },
  });
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
