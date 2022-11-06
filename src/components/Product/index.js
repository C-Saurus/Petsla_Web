import React from 'react'
import { ProductTypes } from '../../redux/constants/productTypes';
import './Product.css'
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { id, product_name, price, images } = product;
    const imgURL = ProductTypes.URL + images;
    console.log(imgURL)
    return (
        <div key={id} className="col l-3 m-4 c-6">
            <div className="home-product-item">
                <div className="home-product-item__img">
                    <Link to={`/product/${id}`} className="hp-item-link">
                        <div className="hp-item-img" style={{
                            backgroundImage: `url(${imgURL})`
                        }}>
                        </div>
                    </Link>
                </div>
                <div className="home-product-item__content">
                    <div className="hp-item-text">
                        <a href="./assets/product/product_1.html" className="hp-item-link">
                            <div className="hp-item-name">
                                {product_name}
                            </div>
                        </a>
                        <div className="hp-item-price">
                            {price}
                        </div>
                    </div>
                    <div className="home-product-item__action">
                        <div className="hp-item-buy hp-item-btn-wrap">
                            <i className="fa-solid fa-bag-shopping"></i>
                            <span className="d-none d-md-block">Buy now</span>
                        </div>
                        <div className="hp-item-cart hp-item-btn-wrap">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="d-none d-xl-block">Add to Cart</span>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default Product;