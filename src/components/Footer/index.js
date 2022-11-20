import './footer.css'
// import './grid.css'
import '../../asset/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(1);
    const { t } = useTranslation()
    useEffect(() => {
        switch (location.pathname) {
            case "/": setIsActive(1)
            case "/shop": setIsActive(2)
            case "/cart": setIsActive(3)
            case "/account/orders": setIsActive(4)
            case "/account/wishlist": setIsActive(4)
            case "/account/profile": setIsActive(4)
        }
    }, [location]);
    return (
        <div classNclassame="footer container">
            <div className="footer__banner">
                <img className='footer__banner--img' src="https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png"></img>
            </div>
            <div className='footer__botNav'>
                <div class="row">
                    <div class='col d-sm-block d-lg-flex d-md-flex'>
                        <div style={{ "fontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }} className="footer__description col sm-12 md-4 lg-4">
                            <div style={{ margin: "10px auto", fontSize: "1.2rem", fontWeight: "bold" }}>Về Petsla</div>
                            <div>PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách mang đến cho cộng đồng những content thú vị, đáng yêu về pets.</div>
                        </div>
                        <div className="col sm-12 md-4 lg-4 d-sm-none d-sm-none d-md-block d-lg-block"></div>
                        <div style={{ "fontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }} className='footer__followUs col sm-12 md-4 lg-4'>
                            <div style={{ margin: "10px auto", fontSize: "1.2rem", fontWeight: "bold", color: "gray" }}>Follow us</div>
                            <div className='footer__followUs--icon'>
                                <a href="https://www.facebook.com/" style={{ marginRight: "5px", color: "gray" }} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <a href='https://www.instagram.com' style={{ color: "gray" }} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bottom__nav">
                <ul className="bot-nav-list">
                    <li className="bot-nav-item" >
                        <Link className='bot-nav-link' to={`/`}>
                            <div className="item-wrap">
                                <div className="bot-nav-icon" style={{ color: isActive === 1 ? "orange" : "black" }}>
                                    <i className="bi bi-house"></i>
                                </div>
                                <div className="bot-nav-Btn bot-nav-homeBtn" style={{ color: isActive === 1 ? "orange" : "black" }}>
                                    {t("content.home")}
                                </div>
                            </div>
                        </Link>

                    </li>
                    <li className="bot-nav-item">
                        <Link className='bot-nav-link' to={`/shop`}>
                            <div className="item-wrap">
                                <div className="bot-nav-icon bot-shop" style={{ color: isActive === 2 ? "orange" : "black" }}>
                                    <i className="bi bi-shop"></i>
                                </div>
                                <div className="bot-nav-Btn bot-shop" style={{ color: isActive === 2 ? "orange" : "black" }}>
                                    {t("content.shop")}
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="bot-nav-item">
                        <Link className='bot-nav-link' to={`/cart`}>
                            <div className="item-wrap">
                                <div className="bot-nav-icon" style={{ color: isActive === 3 ? "orange" : "black" }}>
                                    <i className="bi bi-house"></i>
                                </div>
                                <div className="bot-nav-Btn" style={{ color: isActive === 3 ? "orange" : "black" }}>
                                    {t("content.cart")}
                                </div>
                            </div>
                        </Link>

                    </li>
                    <li className="bot-nav-item">
                        <Link className='bot-nav-link' to={'/account/profile'}>
                            <div className="item-wrap">
                                <div className="bot-nav-icon" style={{ color: isActive === 4 ? "orange" : "black" }}>
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="bot-nav-Btn bot-nav-homeBtn" style={{ color: isActive === 4 ? "orange" : "black" }}>
                                    {t("content.account")}
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;