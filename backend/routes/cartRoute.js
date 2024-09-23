import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cartController.js";
import verifyToken from "../middleware/verifyToken.js";
const cartRouter = express.Router();

cartRouter.post("/add", verifyToken, addToCart);
cartRouter.post("/remove", verifyToken, removeFromCart);
cartRouter.post("/get", verifyToken, getCart);

export default cartRouter;
