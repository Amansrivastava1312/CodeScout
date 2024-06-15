import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import connectDB from "./db/index.js";

import "./passport/github.auth.js";
import path from "path";

dotenv.config({
  path: "./.env",
});

const app = express();
const __dirname = path.resolve();
//Passport.js configuration
app.use(
  session({
    secret: "codeScout",
    resave: false,
    saveUninitialized: false,
  })
);
// persistent login sessions
app.use(passport.initialize());
app.use(passport.session());

// cors
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  // react app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error :: ${error.message}`);
  });
