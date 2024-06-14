import express from "express";
import {
  addPodcast,
  deletePodcast,
  getPodcast,
  getPodcasts,
  updatePodcast,
} from "../controllers/podcast.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
export const router = express.Router();

router.route("/").get(verifyToken, getPodcasts).post(verifyToken, addPodcast);
router
  .route("/:id")
  .get(verifyToken, getPodcast)
  .patch(verifyToken, updatePodcast)
  .delete(verifyToken, deletePodcast);
