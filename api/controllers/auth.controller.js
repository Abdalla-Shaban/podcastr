import bcrypt from "bcrypt";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { User } from "../models/user.model.js";
import { statusMessage } from "../utils/constants.js";
import { createError } from "../utils/createError.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
const { ERROR, FAIL, SUCCESS } = statusMessage;

export const signup = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  const exisitsUser = await User.findOne({ email });
  if (exisitsUser) return next(createError(ERROR, "User already exisits", 409));
  const hashedPassword = await bcrypt.hash(password, 12);
  await User.create({
    username,
    email,
    password: hashedPassword,
  });
  return res.json({ status: SUCCESS, message: "Signup Successfully." });
});

export const signin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const signedinUser = await User.findOne({ email });
  if (!signedinUser) return next(createError(FAIL, "Invalid Credentials", 400));
  const isMatchedPassword = await bcrypt.compare(
    password,
    signedinUser.password
  );
  if (!isMatchedPassword)
    return next(createError(FAIL, "Invalid Credentials", 400));
  const result = await User.findOne({ email }).select("-password");
  const token = generateTokenAndSetCookie(result._id, res);
  result.token = token;
  return res.json({
    status: SUCCESS,
    message: "Signedin Successfully.",
    result,
  });
});

export const signout = async (req, res, next) => {
  try {
    res.cookie("jwt", null, { maxAge: 1 });
    return res.json({ status: SUCCESS, message: "signedout Successfully." });
  } catch (error) {
    return next(createError(ERROR, error.message, 400));
  }
};
