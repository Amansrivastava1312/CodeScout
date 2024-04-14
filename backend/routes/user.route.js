import express from "express";
import {
  // getLikes,
  getUserProfileAndRepos,
  // likeProfile,
} from "../controllers/user.controller.js";
// import { verifyAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);

export default router;
