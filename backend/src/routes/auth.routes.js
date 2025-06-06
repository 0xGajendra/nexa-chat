import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup );
router.post("/login", login)
router.post("/logout", logout)

router.post("/update-profile", verifyToken, updateProfile);

router.get("/check-auth", verifyToken,checkAuth);


export default router