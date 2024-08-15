import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import "./Cart.css";
import { useContext } from "react";
import StoreContext from "../../Context/StoreContext";

const CartPage = () => {
  const { CartItems, addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(StoreContext);
  return (
    <div className="cartItems">
      <div className="cart-heading">
        <h1>Your Food Cart</h1>
        <h1>1 Items</h1>
      </div>
      <div className="cartGrid">
        <div className="cartHeader">
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        {CartItems &&
          CartItems.length > 0 &&
          CartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <div className="item-content">
                <img className="cart-image" src={item.image} alt="food" />
                <div>
                  <h3>{item.name}</h3>
                  <span
                    className="remove-btn"
                    onClick={() => deleteItemFromCart(item.id)}
                  >
                    remove
                  </span>
                </div>
              </div>
              <p className="item-price-total">${item.price}</p>
              <div className="adder_remover">
                <MinusCircleIcon
                  width={24}
                  className="remove"
                  onClick={() => removeItemFromCart(item.id)}
                />
                <p className="quantity">{item.quantity}</p>

                <PlusCircleIcon
                  width={24}
                  className="add"
                  onClick={() => addItemToCart(item.id)}
                />
              </div>
              <p className="item-price-total">${item.quantity * item.price}</p>
            </div>
          ))}
      </div>
      {CartItems.length === 0 && (
        <p className="fallbackText">
          There is no food in your cart, please add some.
        </p>
      )}
    </div>
  );
};

export default CartPage;
