import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import connectDB from "./db/index.js";
import session from "express-session";
import "./passport/github.auth.js";
import path from "path";

dotenv.config({});
const app = express();
const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();
console.log("dirname", __dirname);
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

connectDB()
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log("application is running at port 8000");
    });
  })
  .catch((err) => {
    console.log("MONGODB connectionfailed !!! ", err);
  });

// routes initialization
import userRouter from "./routes/user.route.js";
import exploreRouter from "./routes/explore.route.js";
import authRouter from "./routes/auth.route.js";

// routes declaration
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/explore", exploreRouter);

// connect
app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});
