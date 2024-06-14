import "dotenv/config";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { router as podcastRouter } from "./routes/podcast.routes.js";
import { router as userRouter } from "./routes/user.routes.js";
import { router as authRouter } from "./routes/auth.routes.js";
import { connectDB } from "./config/db.js";
import { PORT } from "./utils/constants.js";
const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/podcast", podcastRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  return res.json({
    status: err.status || "error",
    message: err.message,
    code: err.statusCode || 404,
  });
});

app.listen(PORT, () => console.log(`Server Started At Port ${PORT}`));
