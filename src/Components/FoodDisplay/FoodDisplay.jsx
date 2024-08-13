import { useContext } from "react";
import StoreContext from "../../Context/StoreContext";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);
  //   console.log(foodList);

  return (
    <div className="food-display" id="food-display">
      <h1>Top dishes near you</h1>
      <div className="food-display-list">
        {foodList &&
          foodList.length > 0 &&
          foodList
            .filter((item) => category === "All" || category === item.category)
            .map((item) => {
              return <FoodItem key={item._id} item={item} />;
            })}
      </div>
    </div>
  );
};

export default FoodDisplay;
