import { Router } from "express";
import { login, register, auth, logout } from "./controller/user-controller.js";

export const router = Router();

// User routes
router.post("/login", login);
router.post("/register", register);
router.get("/me", auth);
router.post("/logout", logout);
