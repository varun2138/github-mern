import { Router } from "express";
import { exploreRepos } from "../controllers/explore.controller.js";
import { ensureAuth } from "../middleware/ensureAuth.js";

const router = Router();
router.get("/repos/:language", ensureAuth, exploreRepos);

export default router;
