import React, { useContext } from "react";
import "./productCard.scss";
import { CartContext } from "../../../context/ProductContext";
import { LanguageContext } from "../../../context/LanguageContext";
const ProductCard = ({
  id,
  image,
  name,
  name2,
  description,
  description2,
  price,
  filter,
}) => {
  const { addToCart } = useContext(CartContext);
  const { selectedLanguage } = useContext(LanguageContext);

  const handleAddToCart = () => {
    addToCart({ id, image, name, name2, description, description2, price });
  };
  return (
    <div className="card">
      {filter === "" ? "" : <p className="filter">{filter}</p>}
      <img src={image} alt="pizza" />
      <h4 className="title">
        {selectedLanguage === "en" ? `${name}` : `${name2}`}
      </h4>
      <p className="desc">
        {selectedLanguage === "en" ? `${description}` : `${description2}`}
      </p>
      <div className="btn_wrapper">
        <button className="addToCart" onClick={handleAddToCart}>
          {selectedLanguage === "en" ? `Add To Cart` : `B корзину`}
        </button>
        <span>
          от {price}
          {selectedLanguage === "en" ? `$` : `₽`}{" "}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
