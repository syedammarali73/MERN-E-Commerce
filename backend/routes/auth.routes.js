import express from "express";
import { loginController, logoutController, refreshTokenController, signupController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/logout', logoutController);
router.post('/refresh-token', refreshTokenController);


export default router;