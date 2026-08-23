import { Router } from "express";
import { login, register, auth } from "./controller/user-controller.js";

export const router = Router();

// User routes
router.post("/login", login);
router.post("/register", register);
router.get("/me", auth);
