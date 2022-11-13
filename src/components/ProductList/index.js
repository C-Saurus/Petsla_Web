import React, { useEffect, useState } from 'react'
import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux'
import Sortbar from './SortBar/sortBar'
import { fetchProductList, productListReducer } from './productListSlice';
import { productListSelector } from '../../redux/selectors';
import './productList.css'
const ProductList = () => {
    const dispatch = useDispatch();
    const productList = useSelector(productListSelector);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);

    const products = [...productList]

    const pages = [...Array(Math.ceil(products.length / productsPerPage)).keys()]
    const indexOfPrev = (currentPage - 1) * productsPerPage;
    const indexOfAfter = indexOfPrev + productsPerPage;
    const pros = products.slice(indexOfPrev,indexOfAfter)

    useEffect(() => {
        dispatch(fetchProductList());
    }, [])

    const handleChangePage = (val) => {
        setCurrentPage(val)
    }
    const handleShiftLeftPage = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleShiftRightPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const handleChangeProducts = (e) => {
        setCurrentPage(1);
        setProductsPerPage((parseInt(e.target.value)))
    }
    return (
        <div className="shop">
            <div className="container">
                <div className="grid">
                    <Sortbar />
                    <div className="row">
                        {
                            pros.map(product => {
                                return (<Product key={product.id} product={product} />)
                            }
                            )
                        }
                    </div>
                    <div className='PaginationCustom'>
                        <ul className="pagination">
                            <li className={"page-item" + (currentPage === 1 ? ' disabled' : '')}>
                                <button className="page-link" onClick={() => handleShiftLeftPage()}>&laquo;</button>
                            </li>

                            {
                                pages.map(val => {
                                    return (
                                        <li key={val + 1} className="page-item">
                                            <button className={"page-link" + (val + 1 === currentPage ? ' active' : '')} onClick={() => handleChangePage(val + 1)} >
                                                {val + 1}
                                            </button>
                                        </li>
                                    );
                                })
                            }
                            <li className={"page-item" + (currentPage === pages.length ? ' disabled' : '')}>
                                <button className="page-link" onClick={() => handleShiftRightPage()}>&raquo;</button>
                            </li>
                        </ul>
                        <div className="">
                            <label htmlFor='sort-by'> Products Per Page  </label>
                            <select className="" onChange={handleChangeProducts}>
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductList;
