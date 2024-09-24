import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
  let userData = await userModel.findById(req.body.userId);
  let cartData = await userData.cartData;
  if (!cartData[req.body.itemId]) {
    cartData[req.body.itemId] = 1;
  } else {
    cartData[req.body.itemId] += 1;
  }
  try {
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    return res.status(201).json({ success: true, message: "Add to cart" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: true, message: "Error" });
  }
};

//remove items from user cart
const removeFromCart = async (req, res) => {
  let userData = await userModel.findById(req.body.userId);
  let cartData = await userData.cartData;
  if (cartData[req.body.itemId] > 0) {
    cartData[req.body.itemId] -= 1;
  }
  try {
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    return res
      .status(201)
      .json({ success: true, message: "removed from the cart" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

//fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData?.cartData;
    return res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
