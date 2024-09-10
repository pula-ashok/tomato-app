import React, { useContext } from "react";
import "./foodDisplay.css";
import { storeContext } from "../../context/storeContext";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);
  console.log("ashok", food_list);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
