import fs from "fs";
import foodModel from "../models/foodModel.js";

//add item

const addFood = async (req, res) => {
  let image_filename = `${req?.file?.filename}`;
  const { name, description, price, category } = req.body;
  const food = new foodModel({
    name,
    description,
    price,
    category,
    image: image_filename,
  });
  try {
    await food.save();
    res.status(201).json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

//all food list

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// remove food item

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req?.body?.id);
    fs.unlink(`uploads/${food?.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.status(201).json({ success: true, message: "food removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};
export { addFood, listFood, removeFood };
