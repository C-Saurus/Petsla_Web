import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import Dashboard from "../Dashboard"
import Profile from '../Profile'
import Orders from '../Orders'
import WishList from '../WishList'
import { Container, Row } from "react-bootstrap"
import style from './style.module.css'
import SideDashboard from "../SideDashboard"
const AccountPage = () => {
    const location = useLocation()
    const [isActive, setIsActive] = useState(1);
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
        <div className={style.account_page}>
            <Container>
                <Row>
                    <Dashboard />
                    {isActive === 1 ? <Orders /> : isActive === 2 ? <WishList /> : <Profile />}
                </Row>

            </Container>
            {/* <SideDashboard/> */}
        </div>
    )
}
export default AccountPage