import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { ProductTypes } from "../../../../redux/constants/productTypes";
import { useDispatch } from "react-redux";
import { cartListReducer } from "../../Service/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { product_name, price, description, images, quantity } = item;
  const imgURL = ProductTypes.URL + images;

  const [qty, setQty] = useState(quantity);

  useEffect(() => {
    setQty(quantity);
  }, [quantity]);

  const handleChangeQty = (e) => {
    setQty(e.target.value);
    dispatch(
      cartListReducer.actions.adjustQuantity({
        ...item,
        quantity: e.target.value,
      })
    );
  };

  const handelRemoveFromCart = () => {
    dispatch(cartListReducer.actions.removeFromCart(item));
  };

  return (
    <div className={style.cartItem}>
      <img className={style.cartItem__image} src={imgURL} alt={product_name} />
      <div className={style.cartItem__details}>
        <p className={style.details__title}>{product_name}</p>
        <p className={style.details__desc}>{description}</p>
        <p className={style.details__price}>{price.toLocaleString()}đ</p>
      </div>
      <div className={style.cartItem__actions}>
        <div className={style.cartItem__qty}>
          <label htmlFor="qty">Quantity</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={qty}
            onChange={handleChangeQty}
          />
        </div>
        <button
          className={style.actions__deleteItemBtn}
          onClick={handelRemoveFromCart}
        >
          <img src={imgURL} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
