import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductTypes } from "../../../../../redux/constants/productTypes";
import { cartListReducer } from "../../cartSlice";
const CartPopUpItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, product_name, price, images, quantity } = item;
  const imgURL = ProductTypes.URL + images;

  const [qty, setQty] = useState(quantity);
  const [isDisabled, setIsDisabled] = useState(quantity > 1 ? false : true);
  const [isHover, setIsHover] = useState(quantity <= 1 ? false : true);

  const handleChangeQty = (val = 0) => {
    if (val + qty <= 1) {
      setIsDisabled(true);
      setIsHover(false);
    } else {
      setIsDisabled(false);
    }
    setQty(qty + val);
    dispatch(
      cartListReducer.actions.adjustQuantity({ ...item, quantity: qty + val })
    );
  };
  const handelRemoveFromCart = () => {
    dispatch(cartListReducer.actions.removeFromCart(item));
  };

  return (
    <div key={id} className="product-item-choose">
      <div className="product-plus-minus">
        <button
          className="plus"
          onClick={() => handleChangeQty(1)}
          style={{
            border: "1px solid #e69646",
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <span className="product-number" style={{ fontSize: "0.875rem" }}>
          {qty}
        </span>
        <button
          className="minus"
          onClick={() => handleChangeQty(-1)}
          disabled={isDisabled}
          onMouseEnter={() =>  setIsHover(true)}
          onMouseLeave={() =>  setIsHover(false)}
          style={{
            backgroundColor: isHover ? "#e69646" : "transparent",
            color: isHover ? "#fafafa" : "black",
            border: isDisabled ? "" : "1px solid #e69646",
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
      <div className="product-item-infor">
        <div
          className="product-item-img"
          style={{ backgroundImage: `url(${imgURL})` }}
        ></div>
        <div className="product-detail-infor">
          <div className="product-name">{product_name}</div>
          <div className="product-price" style={{ fontSize: "0.75rem" }}>
            {price.toLocaleString()}đ x {quantity}
          </div>
          <div className="product-total-price">
            {(price * qty).toLocaleString()}đ
          </div>
        </div>
      </div>
      <div className="product-remove">
        <button
          type="button"
          className="btn-remove-cart"
          onClick={handelRemoveFromCart}
        ></button>
      </div>
    </div>
  );
};

export default CartPopUpItem;
