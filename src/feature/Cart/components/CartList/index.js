import React, { useState, useEffect } from 'react';
import style from './style.module.css'
import { useSelector } from 'react-redux';
import { cartListSelector } from "../../../../service/selectors";
import CartItem from "..//CartItem"
const CartList = () => {
    const cartList = useSelector(cartListSelector)

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let total = 0;

        cartList.forEach((item) => {
            items = cartList.length;
            total += item.quantity * item.price;
        });

        setTotalItems(items);
        setTotalPrice(total);
    }, [cartList]);

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
                    <button className={style.summary__checkoutBtn}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartList;
