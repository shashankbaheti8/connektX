import { Router } from "express";
import { Login, Logout, Signup } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

export default router;
