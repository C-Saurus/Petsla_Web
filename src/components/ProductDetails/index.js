import React, { useEffect } from 'react'
import '../../asset/css/base.css'
import '../../asset/css/main.css'
import '../../asset/css/product.css'
import '../../asset/css/responsive.css'
import './ProductDetails.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { selectProduct, removeProduct } from "../../redux/actions/productsAction"
import { ProductTypes } from '../../redux/constants/productTypes';
import { selectProductReducer } from '../Product/productSlice'
import { selectProductSelector } from '../../redux/selectors'

const ProductDetails = () => {
    const { productId } = useParams();
    // let product = useSelector((state) => state.selectProduct);
    let product = useSelector(selectProductSelector);

    // console.log(product)
    const { product_name, price, description, images } = product;
    // console.log("product: ", product)
    // console.log("type of price: ", typeof price)

    const imgURL = ProductTypes.URL + images;

    const dispatch = useDispatch();
    const fetchProductDetail = async (productId) => {
        const response = await axios
            .get("http://petsla-api.herokuapp.com/products/")
            .catch((err) => {
                console.log("Err: ", err);
            });
        const selected = response.data.filter(ele => ele.id.toString() === productId)
        // console.log(selected[0])
        dispatch(selectProductReducer.actions.selectProduct(selected[0]));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(selectProductReducer.actions.removeProduct());
        };
    }, [productId]);

    const changePrice = (price) => {
        if (typeof price === "number")
            return price.toLocaleString();
        else return price;
    }
    return (
        <div className="product">
            <div className="container">
                <div className="product__base">
                    <div className="product__base-img">
                        <img src={imgURL} alt="" className="product__base-imgg" />
                    </div>
                    <div className="product__base-detail">
                        <h2 className="product__base-detail-title">
                            {product_name}
                        </h2>
                        <div className="product__base-detail-price">
                            <span>{changePrice(price)} đ</span>
                        </div>
                        <div className="product__base-detail-btn">
                            <button type="button" className="btn1">
                                <span>Buy Now</span>
                            </button>
                            <button type="button" className="btn2">
                                <span>Add to Cart</span>
                            </button>
                        </div>
                        <div className="product__base-detail-infor">
                            <h3 className="product__base-detail-infor-title">Thông tin sản phẩm</h3>
                            <div className="product__base-detail-infor-text">
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;
