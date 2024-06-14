import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { getUser } from "../controllers/user.controller.js";

export const router = express.Router();

router.get("/", verifyToken, getUser);
