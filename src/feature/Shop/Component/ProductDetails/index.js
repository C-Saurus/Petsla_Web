import React, { useEffect } from "react";
import "../../../../asset/css/base.css";
import "../../../../asset/css/main.css";
import "../../../../asset/css/product.css";
import "../../../../asset/css/responsive.css";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../../../../redux/constants/productTypes";
import {
  fetchProductDetail,
  selectProductReducer,
} from "../../Service//productSlice";
import { selectProductSelector } from "../../../../redux/selectors";
import { cartListReducer } from "../../../Cart/Service/cartSlice";
import { successToast } from "../../../../utils/Toastify";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  let product = useSelector(selectProductSelector);

  const { product_name, price, description, images } = product;
  const imgURL = ProductTypes.URL + images;

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProductDetail(productId));
    return () => {
      dispatch(selectProductReducer.actions.removeProduct());
    };
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(cartListReducer.actions.addToCart(product));
    successToast("Add to Cart Successfully");
  };

  const changePrice = (price) => {
    if (typeof price === "number") return price.toLocaleString();
    else return price;
  };

  return (
    <div className="product">
      <div className="container">
        <div className="product__base">
          <div className="product__base-img">
            <img src={imgURL} alt="" className="product__base-imgg" />
          </div>
          <div className="product__base-detail">
            <h2 className="product__base-detail-title">{product_name}</h2>
            <div className="product__base-detail-price">
              <span>{changePrice(price)} đ</span>
            </div>
            <div className="product__base-detail-btn">
              <button type="button" className="btn1">
                <span>Buy Now</span>
              </button>
              <button type="button" className="btn2" onClick={handleAddToCart}>
                <span>Add to Cart</span>
              </button>
            </div>
            <div className="product__base-detail-infor">
              <h3 className="product__base-detail-infor-title">
                Thông tin sản phẩm
              </h3>
              <div className="product__base-detail-infor-text">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
