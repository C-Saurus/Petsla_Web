import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../../../../asset/css/main.css"
import noProduct from "../../../../asset/image/no_product.png" 
import { cartListSelector, cartpopupSelector } from '../../../../redux/selectors';
import { cartListReducer } from '../cartSlice';
const CartPopUp = () => {
    const dispatch = useDispatch();

    const status = useSelector(cartpopupSelector)
    const cartList = useSelector(cartListSelector)

    const handleHiddenCartPopUp = () => {
        dispatch(cartListReducer.actions.displayCartPopUp(!status))
    }

    return (

        <React.Fragment>
            <div className="backdrop" id='id-backdrop' style={{ display: status ? "block" : "none" }}></div>
            <div role="dialog" className="top-cart" id='id-top-cart' style={{ right: status ? "0" : "-100%" }}>
                <div className="top-cart-header">
                    <div className="top-cart-title"></div>
                    <button type="button" className="btn-close" onClick={handleHiddenCartPopUp}></button>
                </div>
                <div className="top-cart-body">
                    {
                        !cartList.length 
                        ?
                        <div className="no__product" style={{display: "flex"}}>
                            <img src={noProduct} alt="" className="no__product-img" />
                            <h3 className="no__product-title">There's no item in cart!</h3>
                        </div>
                        :
                        <div></div>
                    }
                </div>
                <div className="top-cart-footer">
                    <button type="button" className="cart-btn-check">Checkout</button>
                    <button type="button" className="cart-btn-view">View Cart</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartPopUp;
