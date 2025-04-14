import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id",protectRoute,getMesssages);

export default router;