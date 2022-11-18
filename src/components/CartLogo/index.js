import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartListSelector, cartpopupSelector } from '../../service/selectors';
import { cartListReducer } from '../../feature/Cart/service/cartSlice';

export default function CartLogo() {
    const dispatch = useDispatch();

    const cartList = useSelector(cartListSelector)
    const status = useSelector(cartpopupSelector)

    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        const sum = cartList.reduce((quantity, object) => {
            return quantity + object.quantity;
        }, 0);
        setCartQuantity(sum);
    }, [cartList]);

    const handleCartLogo = () => {
        dispatch(cartListReducer.actions.displayCartPopUp(!status))
    }
    return (
        <div className="header__nav-second-btn" >
            <div className="header__nav-second-btn-item">
                <button className="fa-solid fa-cart-shopping header__nav-second-btn-icon" style={{ border: "none", backgroundColor: "transparent" }} onClick={handleCartLogo}>
                </button>
                <span className="header__nav-second-btn-num">{cartQuantity}</span>
            </div>
        </div>
    )
}
