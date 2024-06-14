import jwt from "jsonwebtoken";
import { asyncHandler } from "./asyncHandler.js";
import { createError } from "../utils/createError.js";
import { statusMessage } from "../utils/constants.js";
import { User } from "../models/user.model.js";

const { ERROR } = statusMessage;

export const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;
  if (!token) return next(createError(ERROR, "Unauthorized", 401));
  const decoded = jwt.verify(token, process.env.JWT_SECRECT_KEY);
  const verifyiedUser = await User.findById(decoded.id).select("-password");
  req.user = verifyiedUser;
  return next();
});
