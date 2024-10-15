import { Router } from "express";
import {
  getLikes,
  likeProfile,
  userDetails,
} from "../controllers/user.controller.js";
import { ensureAuth } from "../middleware/ensureAuth.js";
const router = Router();

router.get("/profile/:username", userDetails);

router.post("/like/:username", ensureAuth, likeProfile);
router.get("/likes", ensureAuth, getLikes);
export default router;
