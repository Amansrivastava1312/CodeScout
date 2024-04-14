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

dotenv.config({
  path: "./.env",
});

const app = express();

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
