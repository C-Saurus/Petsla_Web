import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sideDashboardSelector } from '../../../service/selectors'
import { accountPageSlice } from '../service/accountPageSlice'
const SideDashboard = () => {
    
    const location = useLocation()
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(1)
    const status = useSelector(sideDashboardSelector)
    const handleCloseButton = () => {
        dispatch(accountPageSlice.actions.displaySideDashboard(false))
    }

    useEffect(() => {
        switch (location.pathname) {
            case "/account/orders":
                setIsActive(1);
                break;
            case "/account/wishlist":
                setIsActive(2)
                break;
            case "/account/profile":
                setIsActive(3)
                break;
        }
    }, [location])

    return (
        <div className={style.modal} style={{display: status === true ? "flex": "none"}}>
            <div className={style.pane}>
                <div
                    style={{ fontSize: "1.5rem", marginLeft: "20px", marginBottom: "50px" }}>
                    <i className="bi bi-x-square" onClick={handleCloseButton}></i>
                </div>
                <h5 className={style.dashboard_header}>Dashboard</h5>
                <ul className={style.dashboard_nav_list}>
                    <li>
                        <Link to={`/account/profile`}
                            style={{ color: isActive === 3 ? "rgb(230, 150, 70)" : "black", textDecoration: "none" }}
                            className={style.dashboard_nav_item}>
                            <i className="bi bi-person"></i>
                            <span style={{ color: isActive === 3 ? "rgb(230, 150, 70)" : "black", marginLeft: "10px" }} className="title">Profile</span>
                        </Link>
                    </li>
                    <li >
                        <Link to={`/account/orders`}
                            style={{ color: isActive === 1 ? "rgb(230, 150, 70)" : "black", textDecoration: "none" }}
                            className={style.dashboard_nav_item}>
                            <i className="bi bi-bag"></i>
                            <span style={{ color: isActive === 1 ? "rgb(230, 150, 70)" : "black", marginLeft: "10px" }} className="title">Orders</span>
                        </Link>
                    </li>
                    <li >
                        <Link to={`/account/wishlist`}
                            style={{ color: isActive === 2 ? "rgb(230, 150, 70)" : "black", textDecoration: "none" }}
                            className={style.dashboard_nav_item}>
                            <i className="bi bi-heart"></i>
                            <span style={{ color: isActive === 2 ? "rgb(230, 150, 70)" : "black", marginLeft: "10px" }} className="title">Wishlist</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div onClick={handleCloseButton} className={style.backdrop}>

            </div>
        </div>
    )
}
export default SideDashboard