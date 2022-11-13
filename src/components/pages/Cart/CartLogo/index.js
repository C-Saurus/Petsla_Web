import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { cartListSelector } from '../../../../redux/selectors';

export default function CartLogo() {
    
    const [cartQuantity, setCartQuantity] = useState(0);
    const cartList = useSelector(cartListSelector)
    useEffect(() => {
        const sum = cartList.reduce((quantity, object) => {
            return quantity + object.quantity;
        }, 0);
        setCartQuantity(sum);
    }, [cartList]);

    return (
        <div className="header__nav-second-btn" >
            <div className="header__nav-second-btn-item">
                <i className="fa-solid fa-cart-shopping header__nav-second-btn-icon"></i>
                <span className="header__nav-second-btn-num">{cartQuantity}</span>
            </div>
        </div>
    )
}
