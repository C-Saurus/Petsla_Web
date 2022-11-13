import React, {Fragment} from 'react'
import logoIcon from "../../asset/logo.png"
import './Header.css'
import './responsive.css'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/actions/auth/apiRequest'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartLogo from '../pages/Cart/CartLogo'
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user  = useSelector((state) => state.auth.login.currentUser) || localStorage.getItem("token");
//   const user = localStorage.getItem("token");
  console.log(user)
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login")
  }
  const handleLogout = (e) => {
    e.preventDefault();
    logOut(dispatch, navigate);
    toast.success('Đăng xuất thành công!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    navigate("/shop")
  }
  return (
    <Fragment>
        <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </header>
        <div className="header__nav-first">
            <div className="container">
                <div className="header__nav-first-contact-wrap">
                    <div className="header__nav-first-contact">
                        <div className="header__nav-first-email">
                            <i className="header__nav-first-email-iconn fa-regular fa-envelope"></i>
                            <div className="header__nav-first-email-text">petsla.vn@gmail.com</div>
                        </div>
                        <div className="header__nav-first-separate"></div>
                        <div className="header__nav-first-phoneNum">
                            <i className="header__nav-first-phoneNum-iconn fa-solid fa-phone"></i>
                            <div className="header__nav-first-phoneNum-num">0123 456 789</div>
                        </div>
                    </div>
                    <div className="header__nav-firs-bgr">
                        <a href='' className="header__nav-second-branch-link">
                            <img src={logoIcon} alt="" className="header__nav-second-branch-img" />
                        </a>
                    </div>
                    <div className="header__nav-first-listIcon">
                        <div className="header__nav-first-listIcon-item">
                            <div className="header__nav-first-listIcon-item1">
                                <div className="header__nav-first-listIcon-item1-hover">Toggle theme</div>
                            </div>
                            
                        </div>
                        <div className="header__nav-first-listIcon-item">
                            <div className="header__nav-first-listIcon-item2">
                                <i className="fa-solid fa-moon" ></i>
                                <div className="header__nav-first-listIcon-item2-hover">Toggle theme</div>
                            </div>
                            
                        </div>
                        <div className="header__nav-first-listIcon-item">
                            {!user
                            ? 
                            <button className="header__nav-first-listIcon-item3" onClick={handleLogin}>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                <div className="header__nav-first-listIcon-item3-hover">Login</div>
                            </button>
                            :
                            <button className="header__nav-first-listIcon-item3" onClick={handleLogout}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <div className="header__nav-first-listIcon-item3-hover">Logout</div>
                            </button>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__nav-second">
            <div className="container">
                <div className="header__nav-second-base">
                    <div className="header__nav-second-branch">
                        <a href="" className="header__nav-second-branch-link">
                            <img src={logoIcon} alt="" className="header__nav-second-branch-img"/>
                        </a>
                    </div>
                    <div className="header__nav-second-search">
                        <form action="">
                            <div className="header__nav-second-search-form">
                                <input type="text" name="search" placeholder="Everything here is better than your ex" className="header__nav-second-search-input"/>
                                <button type="submit" className="header__nav-second-search-btn">
                                    <i className="fa-solid fa-magnifying-glass header__nav-second-search-icon"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <CartLogo />
                </div>
            </div>
        </div>
        <div className="header__nav-third">
            <div className="container">
                <ul className="header__nav-third-list">
                    <li className="header__nav-third-item">
                        <Link to='/' className="header__nav-third-link" >Home</Link>
                    </li>
                    <li className="header__nav-third-item">
                        <Link to='/shop' className="header__nav-third-link" >Shop</Link>
                    </li>
                    <li className="header__nav-third-item">
                        <Link to='/cart' className="header__nav-third-link" >Cart</Link>
                    </li>
                    {/* <li className="header__nav-third-item">

                                <Link to='/contact' className="header__nav-third-link" >Contact</Link>
                            </li>
                            <li className="header__nav-third-item">
                                <Link to='/account' className="header__nav-third-link" >Account</Link>
                            </li> */}

                </ul>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
        <ToastContainer />
    </Fragment>
  )
}

export default Header
