import React from 'react'
import { ProductTypes } from '../../redux/constants/productTypes';
import '../../asset/css/base.css'
import '../../asset/css/main.css'
import '../../asset/css/product.css'
import '../../asset/css/responsive.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cartListReducer } from '../pages/Cart/cartSlice';
import { successToast } from '../../utils/Toastify';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const { id, product_name, price, images } = product;
    const imgURL = ProductTypes.URL + images;
    
    const handleAddToCart = () => {
        dispatch(cartListReducer.actions.addToCart(product));
        successToast("Add to Cart Successfully");
    }

    return (
        <div key={id} className="coll ll-3 mm-4 ss-6">
            <div className="product-item">
                <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
                    <div className="product-item-bgr" style={{
                        backgroundImage: `url(${imgURL})`
                    }}>
                    </div>
                </Link>
                <div className="product-content pad-content">
                    <div className="product-content-desc">
                        <Link to={`/product/${id}`} className="hp-item-link" style={{ textDecoration: "none" }}>
                            <span className="title"> {product_name}</span>
                        </Link>
                        <div className="price">{price.toLocaleString('vi-VN')}</div>
                    </div>
                    <div className="product-content-cart">
                        <div className="buy-btn">
                            <i className="buy-icon fa-solid fa-bag-shopping"></i>
                            <span>Buy now</span>
                        </div>
                        <button className="cart-btn" onClick={handleAddToCart}>
                            <i className="cart-icon fa-solid fa-cart-shopping"></i>
                            <span className="hidden-text-cart">Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;