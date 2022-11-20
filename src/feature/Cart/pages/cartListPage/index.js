import React from "react";
import style from "./style.module.css"
import CartItem from "../../components/CartItem"
export default function CartListPage({cartList,totalItems,totalPrice}) {

  return (
    <div>
      <div className={style.cart}>
        <div className={style.cart__items}>
          {cartList.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className={style.cart__summary}>
          <h4 className={style.summary__title}>Cart Summary</h4>
          <div className={style.summary__price}>
            <span>{totalItems} items</span>
            <span>{totalPrice.toLocaleString()} đ</span>
          </div>
          <button className={style.summary__checkoutBtn}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
