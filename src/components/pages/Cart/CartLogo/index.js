import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartListSelector, cartpopupSelector } from '../../../../redux/selectors';
import { cartListReducer } from '../cartSlice';

export default function CartLogo() {
    const dispatch = useDispatch();

    const cartList = useSelector(cartListSelector)
    const status = useSelector(cartpopupSelector)

    const [cartQuantity, setCartQuantity] = useState(0);
    const [isActive, setIsActive] = useState(status);

    useEffect(() => {
        const sum = cartList.reduce((quantity, object) => {
            return quantity + object.quantity;
        }, 0);
        setCartQuantity(sum);
    }, [cartList]);

    const handleCartLogo = () => {
        let tmp = !isActive
        setIsActive(tmp)
        dispatch(cartListReducer.actions.displayCartPopUp(tmp))
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
