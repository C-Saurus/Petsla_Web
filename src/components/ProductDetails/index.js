import React, { useEffect } from 'react'
import './ProductDetails.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, removeProduct } from "../../redux/actions/productsAction"
import { ProductTypes } from '../../redux/constants/productTypes';

const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.selectProduct);
    // console.log(product)
    const { product_name, price, description, images } = product;
    const imgURL = ProductTypes.URL + images;

    const dispatch = useDispatch();
    const fetchProductDetail = async (productId) => {
        const response = await axios
            .get("http://petsla-api.herokuapp.com/products/")
            .catch((err) => {
                console.log("Err: ", err);
            });
            const selected = response.data.filter(ele => ele.id.toString() === productId)
            console.log(selected)
        dispatch(selectProduct(selected[0]));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeProduct());
        };
    }, [productId]);

    return (
        <div className="products">
            <div className="grid wide">
                <div className="home-product">
                    <div className="row display-products">
                        <div className="col l-6 m-6 c-12">
                            <div className="product-detail__img-wrap">
                                <img className="product-detail__img" src={imgURL} />
                            </div>
                        </div>
                        <div className="col l-6 m-6 c-12">
                            <div className="product-detail__info">
                                <h2 className="product-detail__info-title">
                                    {product_name}
                                </h2>
                                <div className="product-detail__info-price"><span>
                                    {price}đ
                                </span></div>
                                <div className="product-detail__info-btn-wrap">
                                    <button type="button" className="product-detail__info-btn-item product-detail__info-btn-buy">
                                        <span className="">Buy Now</span>
                                    </button>
                                    <button type="button" className="product-detail__info-btn-item product-detail__info-btn-cart">
                                        <span className="">Add to Cart</span>
                                    </button>
                                </div>
                                <div className="product-desc">
                                    <h3 className="product-desc-title">Thông tin sản phẩm</h3>
                                    <div className="product-desc-detail">
                                        {description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ProductDetails;
