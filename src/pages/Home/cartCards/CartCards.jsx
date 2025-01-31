import { useContext } from "react";
import { CartContext } from "../../../context/ProductContext";
import { LanguageContext } from "../../../context/LanguageContext";
import "./cartCards.scss";
const CartCards = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const { selectedLanguage } = useContext(LanguageContext);
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const handleIncrement = (item) => {
    addToCart({ ...item, quantity: item.quantity + 1 });
  };

  const handleDecrement = (item) => {
    if ((item.quantity = -1)) {
      addToCart({ ...item, quantity: item.quantity + 1 });
    }
  };

  return (
    <div className="cartCards_row">
      {cartItems.map((res) => (
        <div className="cart_cards">
          <div className="main_info">
            <img src={res.image} />
            <div className="text_info">
              <h3>
                {selectedLanguage === "en" ? `${res.name}` : `${res.name2}`}
              </h3>
              <p>{res.description}</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="counter">
              <button
                className="btn decrease"
                onClick={() => handleDecrement(res)}
              >
                -
              </button>
              <button className="btn">{res.quantity}</button>
              <button
                className="btn increase"
                onClick={() => handleIncrement(res)}
              >
                +
              </button>
            </div>
            <p>
              <span>
                {selectedLanguage === "en"
                  ? `${res.price} $`
                  : `${res.price} ₽`}
              </span>
            </p>
          </div>
        </div>
      ))}
      <div id="pagination-container"></div>
      <div className="total_price">
        <p className="total_price">
          <span>
            {selectedLanguage === "en" ? `Total Price:` : `Итоговая цена:`}
          </span>
          {getTotalPrice()} {selectedLanguage === "en" ? `$` : `₽`}
        </p>
      </div>
    </div>
  );
};

export default CartCards;
