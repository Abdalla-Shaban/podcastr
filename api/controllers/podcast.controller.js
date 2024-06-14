import { asyncHandler } from "../middlewares/asyncHandler.js";
import { Podcast } from "../models/podcast.model.js";
import { createError } from "../utils/createError.js";
import { statusMessage } from "../utils/constants.js";

const { ERROR, FAIL, SUCCESS } = statusMessage;

export const getPodcasts = asyncHandler(async (req, res) => {
  const podcasts = await Podcast.find({ createdBy: req.user._id.toString() });
  return res.json({ status: SUCCESS, result: podcasts });
});

export const getPodcast = asyncHandler(async (req, res) => {
  const podcast = await Podcast.findById(req.params.id);
  return res.json({ status: SUCCESS, result: podcast });
});

export const addPodcast = asyncHandler(async (req, res) => {
  const { title, description, image } = req.body;
  const newPodcast = await Podcast.create({
    title,
    description,
    image,
    createdBy: req.user._id,
  });
  return res.json({ status: SUCCESS, result: newPodcast });
});
export const updatePodcast = asyncHandler(async (req, res, next) => {
  const { title, description, image } = req.body;
  const updatedPodcast = await Podcast.findByIdAndUpdate(req.params.id, {
    title,
    description,
    image,
  });
  if (!updatedPodcast)
    return next(createError(ERROR, "Not Found Podcast", 404));
  return res.json({ status: SUCCESS, result: updatedPodcast });
});

export const deletePodcast = asyncHandler(async (req, res, next) => {
  const deletedPodcast = await Podcast.findByIdAndDelete(req.params.id);
  if (!deletedPodcast)
    return next(createError(ERROR, "Not Found Podcast", 404));
  return res.json({
    status: SUCCESS,
    message: "Podcast Deleted Successfully.",
  });
});
