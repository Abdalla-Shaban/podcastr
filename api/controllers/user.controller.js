import { asyncHandler } from "../middlewares/asyncHandler.js";
import { statusMessage } from "../utils/constants.js";

const { SUCCESS } = statusMessage;
export const getUser = asyncHandler(async (req, res) => {
  const verifyiedUser = req.user;
  console.log(verifyiedUser);
  return res.json({ status: SUCCESS, result: verifyiedUser });
});
