import jwt from "jsonwebtoken";
export const generateTokenAndSetCookie = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRECT_KEY, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    // httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });
  return token;
};
