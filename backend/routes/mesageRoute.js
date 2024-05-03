import express from "express";
import { getMesage, sentMessage } from "../controllers/messageController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/send/:id").post(isAuthenticated, sentMessage);
router.route("/:id").get(isAuthenticated, getMesage);

export default router;
