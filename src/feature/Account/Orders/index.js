import React, { useEffect, useState } from 'react'
// import { getAddOrder, getOrder, updateUser } from '../../../service/apiRequest'
// import { useDispatch } from 'react-redux'
// import { successToast, warnToast } from '../../../utils/toastify'
// import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { Col } from 'react-bootstrap'
// import style from '../Profile/style.module.css'
import { warnToast } from '../../../utils/toastify'
import { useNavigate } from 'react-router'
import { getOrder } from '../../../service/apiRequest'
import { useDispatch } from 'react-redux'
// import SideDashboard from '../SideDashboard'
import style from './style.module.css';
import 'bootstrap/dist/css/bootstrap.css'

const Orders = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const ditpatch = useDispatch()
    const [listOrder, setListOrder] = useState([]);
    useEffect(() => {
        if (!token) {
            warnToast('Bạn cần đăng nhập trước!')
            navigate('/login')
        }
        else {
            getOrder(token, ditpatch).then(res => setListOrder(res))
        }
    }, [token, navigate, ditpatch])
    // render listOrder ra là xong :<

    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage, setOrdersPerPage] = useState(5);

    const orders = [...listOrder];
    const pages = [...Array(Math.ceil(orders.length / ordersPerPage)).keys()];
    const indexOfPrev = (currentPage - 1) * ordersPerPage;
    const indexOfAfter = indexOfPrev + ordersPerPage;
    const ords = orders.slice(indexOfPrev, indexOfAfter);

    useEffect(() => {
        setCurrentPage(1);
    }, [listOrder]);

    const handleChangePage = (val) => {
        setCurrentPage(val);
        window.scrollTo(0, 0);
    };
    const handleShiftLeftPage = () => {
        setCurrentPage(currentPage - 1);
        window.scrollTo(0, 0);
    };
    const handleShiftRightPage = () => {
        setCurrentPage(currentPage + 1);
        window.scrollTo(0, 0);
    };

    const handleChangeProducts = (e) => {
        const numOfOrders = parseInt(e.target.value);
        if (numOfOrders < ordersPerPage) {
            window.scrollTo(0, 0);
        }
        setCurrentPage(1);
        setOrdersPerPage(parseInt(e.target.value));
    };

    return (
        <Col lg={9} >
            <div className="d-md-block d-lg-flex" >
                <div className={style.titleWrap}>
                    <div className={style.title}>
                        <i style={{ marginRight: "10px" }} className="bi bi-bag-fill"></i>
                        <span style={{ color: "black" }}>My Orders</span>
                    </div>
                    <div className={[style.show_dashboard_btn, "d-lg-none d-block"].join(' ')}>
                        <i class="bi bi-list"></i>
                    </div>
                </div>
            </div>
            <div className={[style.orderList, "list-group list-group-flush"].join(' ')} style={{ backgroundColor: "transparent" }}>
                <div className={style.orderListHeader}>
                    <div className='col-2'>#</div>
                    <div className='col-2'>Order</div>
                    <div className='col-2'>Status</div>
                    <div className='col-2'>Time Placed</div>
                    <div className='col-2'>Total Price</div>
                </div>
                {ords.map((item, index) => (
                    <div key={item.id} className={[style.orderListItem, 'list-group-item', 'shadow-sm rounded'].join(' ')} style={{ backgroundColor: "rgba(255,255,255,0.4)", marginBottom: "10px" }}>
                        <div className='col-2'>{index}</div>
                        <div className='col-2'>{item.id}</div>
                        <div className='col-2'>
                            <span className={style.orderStatus}>pending</span>
                        </div>
                        <div className='col-2'>{new Date(item.created_at).toLocaleDateString() + " "
                            + new Date(item.created_at).toLocaleTimeString()}</div>
                        <div className='col-2'>{item.total_price}</div>
                    </div>
                ))}
            </div>
            <div className={style.PaginationCustom}>
                <ul className={style.pagination}>
                    <li
                        className={[
                            style.pageItem,
                            currentPage === 1 ? `${style.disabled}` : "",
                        ].join(" ")}
                    >
                        <button
                            className={style.pageLink}
                            onClick={() => handleShiftLeftPage()}
                        >
                            &laquo;
                        </button>
                    </li>

                    {pages.map((val) => {
                        return (
                            <li key={val + 1} className={style.pageItem}>
                                <button
                                    className={[
                                        style.pageLink,
                                        val + 1 === currentPage ? `${style.active}` : "",
                                    ].join(" ")}
                                    onClick={() => handleChangePage(val + 1)}
                                >
                                    {val + 1}
                                </button>
                            </li>
                        );
                    })}
                    <li
                        className={[
                            style.pageItem,
                            currentPage === pages.length ? `${style.disabled}` : "",
                        ].join(" ")}
                    >
                        <button
                            className={style.pageLink}
                            onClick={() => handleShiftRightPage()}
                        >
                            &raquo;
                        </button>
                    </li>
                </ul>
                <div className="">
                    <label htmlFor="itemsPerPage">Items / Page</label>
                    <select id="itemsPerPage" className="" onChange={handleChangeProducts}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </Col>
    )
}
export default Orders
