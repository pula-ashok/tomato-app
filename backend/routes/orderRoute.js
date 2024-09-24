import express from "express";
import verifyToken from "./../middleware/verifyToken.js";
import { placeOrder, verifyOrder } from "../controllers/orderController.js";
const orderRoute = express.Router();

orderRoute.post("/place", verifyToken, placeOrder);
orderRoute.post("/verify", verifyOrder);

export default orderRoute;
