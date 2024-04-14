import express from "express";
import {
  explorePopularRepos,
  exploreSimilarUsers,
} from "../controllers/explore.controller.js";
import { verifyAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/repos/:language", verifyAuth, explorePopularRepos);
router.get("/users/:user", verifyAuth, exploreSimilarUsers);

export default router;
