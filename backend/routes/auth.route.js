import express from "express";
import passport from "passport";
// import { verifyAuth } from "../middleware/auth.middleware.js";
import { checkUser, logoutUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: process.env.CLIENT_BASE_URL + "/login",
  }),
  function (req, res) {
    res.redirect(process.env.CLIENT_BASE_URL);
  }
);

router.get("/check", checkUser);

router.get("/logout", logoutUser);

export default router;
