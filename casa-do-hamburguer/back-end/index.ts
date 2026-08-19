import express, { type Request, type Response } from "express";
import cors from "cors";
import { Connect } from "./src/db.js";
import { router } from "./src/routes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(router);
Connect();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
