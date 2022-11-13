import React, { useEffect, useState } from 'react'
import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux'
import Sortbar from './SortBar/sortBar'
import { fetchProductList, productListReducer } from './productListSlice';
import { productListSelector } from '../../redux/selectors';
import style from './style.module.css'
const ProductList = () => {

    const dispatch = useDispatch();
    const productList = useSelector(productListSelector);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);

    const products = [...productList]

    const pages = [...Array(Math.ceil(products.length / productsPerPage)).keys()]
    const indexOfPrev = (currentPage - 1) * productsPerPage;
    const indexOfAfter = indexOfPrev + productsPerPage;
    // console.log(indexOfPrev, "->", indexOfAfter)
    const pros = products.slice(indexOfPrev, indexOfAfter)
    // console.log("pros: ", pros)

    useEffect(() => {
        dispatch(fetchProductList());
    }, [])
    
    const handleChangePage = (val) => {
        setCurrentPage(val)
        window.scrollTo(0, 0);
    }
    const handleShiftLeftPage = () => {
        setCurrentPage(currentPage - 1)
        window.scrollTo(0, 0);
    }
    const handleShiftRightPage = () => {
        setCurrentPage(currentPage + 1)
        window.scrollTo(0, 0);
    }

    const handleChangeProducts = (e) => {
        const numOfProducts = parseInt(e.target.value)
        if(numOfProducts < productsPerPage){
            window.scrollTo(0, 0);
        }
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
                    <div className={style.PaginationCustom}>
                        <ul className={style.pagination}>
                            <li className={[style.pageItem,  (currentPage === 1 ? `${style.disabled}` : '')].join(' ')}>
                                <button className={style.pageLink} onClick={() => handleShiftLeftPage()}>&laquo;</button>
                            </li>

                            {
                                pages.map(val => {
                                    return (
                                        <li key={val + 1} className={style.pageItem}>
                                            <button className={[style.pageLink, (val + 1 === currentPage ? `${style.active}` : '')].join(' ')} onClick={() => handleChangePage(val + 1)} >
                                                {val + 1}
                                            </button>
                                        </li>
                                    );
                                })
                            }
                            <li className={[style.pageItem, (currentPage === pages.length ? `${style.disabled}` : '')].join(' ')}>
                                <button className={style.pageLink} onClick={() => handleShiftRightPage()}>&raquo;</button>
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
