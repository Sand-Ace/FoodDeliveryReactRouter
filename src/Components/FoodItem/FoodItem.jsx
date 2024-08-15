import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import StoreContext from "../../Context/StoreContext";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

const FoodItem = ({ item }) => {
  const { CartItems, addItemToCart, removeItemFromCart } =
    useContext(StoreContext);

  const { _id, name, image, price, description } = item;
  //   console.log(_id, name, image, price, description);

  const cartItem = CartItems.find((item) => item.id === _id);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-img" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-des">{description}</p>
        <div className="price-cart">
          <p className="food-item-price">${price}</p>
          {!cartItem ? (
            <div className="add-cart">
              <span>Add to cart</span>
              <PlusCircleIcon
                width={34}
                className="shopping-cart"
                onClick={() => addItemToCart(_id)}
              />
            </div>
          ) : (
            <div className="adder_remover">
              <MinusCircleIcon
                width={34}
                className="shopping-cart remove"
                onClick={() => removeItemFromCart(_id)}
              />
              <p>{cartItem.quantity}</p>

              <PlusCircleIcon
                width={34}
                className="shopping-cart add"
                onClick={() => addItemToCart(_id)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
