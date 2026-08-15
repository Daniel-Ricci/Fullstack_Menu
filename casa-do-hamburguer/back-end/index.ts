import express from "express";
import { Connect } from "./src/db.js"

const app = express();
Connect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
