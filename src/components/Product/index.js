import React from 'react'
import { ProductTypes } from '../../redux/constants/productTypes';
import './Product.css'
import '../../asset/css/base.css'
import '../../asset/css/main.css'
import '../../asset/css/product.css'
import '../../asset/css/responsive.css'
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { id, product_name, price, images } = product;
    const imgURL = ProductTypes.URL + images;
    console.log(imgURL)
    return (
        <div key={id} className="coll ll-3 mm-4 ss-6">
            <div className="product-item">
                <Link to={`/product/${id}`}>
                    <div className="product-item-bgr" style={{
                        backgroundImage: `url(${imgURL})`
                    }}>
                    </div>
                </Link>
                <div className="product-content pad-content">
                    <div class="product-content-desc">
                        <Link to={`/product/${id}`} className="hp-item-link">
                            <span className="title"> {product_name}</span>
                        </Link>
                        <div className="price">{price}</div>
                    </div>
                    <div className="product-content-cart">
                        <div className="buy-btn">
                            <i className="buy-icon fa-solid fa-bag-shopping"></i>
                            <span>Buy now</span>
                        </div>
                        <div className="cart-btn">
                            <i className="cart-icon fa-solid fa-cart-shopping"></i>
                            <span className="hidden-text-cart">Add to Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;