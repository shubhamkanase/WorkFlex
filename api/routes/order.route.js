import express from "express";
import { verifyToken } from "../middleware/jwt.js";
<<<<<<< HEAD
import { getOrders, intent, confirm } from "../controllers/order.controller.js";
=======
import { getOrders, intent, confirm ,deleteOrder} from "../controllers/order.controller.js";
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7

const router = express.Router();

// router.post("/:id", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);
<<<<<<< HEAD
=======
router.delete("/delete/:id",  deleteOrder);
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7

export default router;