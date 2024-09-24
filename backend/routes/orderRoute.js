import express from "express";
import verifyToken from "./../middleware/verifyToken.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";
const orderRoute = express.Router();

orderRoute.post("/place", verifyToken, placeOrder);
orderRoute.post("/verify", verifyOrder);
orderRoute.post("/userorders", verifyToken, userOrders);
orderRoute.get("/list", listOrders);
orderRoute.post("/status", updateStatus);
export default orderRoute;
