import './style.module.css'

const SideDashboard = () => {
    const location = useLocation()
    const [isActive, setIsActive] = useState(1)

    useEffect(() => {
        console.log(location.pathname)
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
        <div className="side__dashboard">
            <div className="side__dashboard--pane">
                <div className='pane--header'>
                    <div className='pane--header--title'>

                    </div>
                    <div className='pane--header--close'>

                    </div>
                </div>
                <div className='pane--body'>
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
            </div>
            <div className="side__dashboard--backdrop">

            </div>
        </div>
    )
}
export default SideDashboard;