import express from "express";
import {
  getUserProfileAndRepos,
  getContributorsAndContributions,
} from "../controllers/user.controller.js";
import { verifyAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile/:username", verifyAuth, getUserProfileAndRepos);
router.get(
  "/contributors/:owner/:repo",
  verifyAuth,
  getContributorsAndContributions
);

export default router;
