import style from './style.module.css'
import { Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const location = useLocation()
    const [isActive, setIsActive] = useState(1)

    useEffect(() => {
        console.log(location.pathname)
        switch (location.pathname) {
            case "/account/orders":
                setIsActive(1);
            case "/account/wishlist":
                setIsActive(2)
            case "/account/profile":
                setIsActive(3)
        }
    }, [location])

    return (
        <Col lg={3} className="d-none d-lg-block">
            <div className="shadow-sm rounded" style={{ backgroundColor: "white", padding: "0.5rem" }}>
                <div className="dashboard">
                    <h5 className={style.dashboard_header}>Dashboard</h5>
                    <ul className={style.dashboard_nav_list}>
                        <li>
                            <Link to={`/account/profile`}
                                style={{ color: isActive === 3 ? "rgb(230, 150, 70)" : "black", textDecoration: "none" }}
                                className={style.dashboard_nav_item}>
                                <i className="bi bi-person"></i>
                                <span style={{color: isActive === 3 ? "rgb(230, 150, 70)" : "black", marginLeft: "10px" }} className="title">Profile</span>
                            </Link>
                        </li>
                        <li >
                            <Link to={`/account/orders`}
                                style={{ color: isActive === 1 ? "rgb(230, 150, 70)" : "black", textDecoration: "none" }}
                                className={style.dashboard_nav_item}>
                                <i className="bi bi-bag"></i>
                                <span style={{color: isActive === 1 ? "rgb(230, 150, 70)" : "black", marginLeft: "10px" }} className="title">Orders</span>
                            </Link>
                        </li>
                        <li >
                            <Link to={`/account/wishlist`}
                                style={{ color: isActive === 2 ? "rgb(230, 150, 70)" : "black", textDecoration: "none" }}
                                className={style.dashboard_nav_item}>
                                <i className="bi bi-heart"></i>
                                <span style={{color: isActive === 2 ? "rgb(230, 150, 70)" : "black", marginLeft: "10px" }} className="title">Wishlist</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Col>

    )
}
export default Dashboard