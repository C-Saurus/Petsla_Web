import React, { useEffect } from 'react'
import axios from "axios"
import './ProductList.css'
import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from "../../redux/actions/productsAction"
import Sortbar from './SortBar/sortBar'

const ProductList = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.allProducts.productList);
    console.log("productList: ", productList)

    const fetchProducts = async () => {
        const response = await axios
            .get("http://petsla-api.herokuapp.com/products/")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data))
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="products">
            <div className="grid wide">
                <Sortbar/>
                <div className="home-product">
                    <div className="row display-products">
                        {
                            productList.map(product => {
                                return (<Product key={product.id} product={product} />)
                            }
                            )
                        }
                    </div>
                </div>

            </div>
        </div>

    )
}
export default ProductList;