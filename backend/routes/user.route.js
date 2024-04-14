import express from "express";
import {
  // getLikes,
  getUserProfileAndRepos,
  // likeProfile,
} from "../controllers/user.controller.js";
// import { verifyAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
// router.get("/likes", verifyAuth, getLikes);
// router.post("/like/:username", verifyAuth, likeProfile);

export default router;
