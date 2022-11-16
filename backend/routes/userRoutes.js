import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js";
import { verifyAdmin } from "../middleware/adminMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, verifyAdmin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
