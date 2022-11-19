import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import "../../../asset/css/main.css";
import noProduct from "../../../asset/image/no_product.png";
import {
  cartListSelector,
  cartpopupSelector,
} from "../../../service/selectors";
import { cartListReducer } from "../../../feature/Cart/service/cartSlice";
import CartPopUpItem from "../CartPopUpItem";
const CartPopUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(cartpopupSelector);
  const cartList = useSelector(cartListSelector);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    let items = 0;

    cartList.forEach((item) => {
      items += item.quantity;
      total += item.quantity * item.price;
    });
    setTotalItems(items);
    setTotalPrice(total);
  }, [cartList]);

  const handleHiddenCartPopUp = () => {
    dispatch(cartListReducer.actions.displayCartPopUp(!status));
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  const handleCheckOut = () => {
    navigate("/customer-info");
  };

  const handleClickOutsideCartPopUp = () => {
    if (status) dispatch(cartListReducer.actions.displayCartPopUp(false));
  };

  return (
    <React.Fragment>
      <div
        className="backdrop"
        id="id-backdrop"
        style={{ display: status ? "block" : "none" }}
      ></div>
      <OutsideClickHandler onOutsideClick={handleClickOutsideCartPopUp}>
        <div
          role="dialog"
          className="top-cart"
          id="id-top-cart"
          style={{ right: status ? "0" : "-100%" }}
        >
          <div className="top-cart-header">
            <div className="top-cart-title">
              Cart: {totalItems} {totalItems > 1 ? "Items" : "Item"}{" "}
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={handleHiddenCartPopUp}
            ></button>
          </div>
          {!totalItems ? (
            <div className="top-cart-body">
              <div className="no__product" style={{ display: "flex" }}>
                <img src={noProduct} alt="" className="no__product-img" />
                <h3 className="no__product-title">There's no item in cart!</h3>
              </div>
            </div>
          ) : (
            <div className="top-cart-body">
              {cartList.map((item) => {
                return <CartPopUpItem key={item.id} item={item} />;
              })}
            </div>
          )}
          <div className="top-cart-footer">
            <button
              type="button"
              className="cart-btn-check"
              onClick={handleCheckOut}
            >
              Checkout ({totalPrice.toLocaleString()}đ)
            </button>
            <button
              type="button"
              className="cart-btn-view"
              onClick={handleViewCart}
            >
              View Cart
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </React.Fragment>
  );
};

export default CartPopUp;
