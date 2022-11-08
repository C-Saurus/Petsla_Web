import React, {useState} from 'react'
import logoIcon from "../../asset/logo.png"
import './Header.css'
import './CssBase/responsive.css'
import './CssBase/base.css'
import {Link} from 'react-router-dom'
function Header() {

  return (
    <div>
        <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </header>
        <div className='main'>
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
                                <button className="header__nav-first-listIcon-item3">
                                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                    <div className="header__nav-first-listIcon-item3-hover">Login</div>
                                </button>
                                
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
                        <div className="header__nav-second-btn">
                            <div className="header__nav-second-btn-item">
                                <i className="fa-solid fa-cart-shopping header__nav-second-btn-icon"></i>
                                <span className="header__nav-second-btn-num">0</span>
                            </div>
                        </div>
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
        </div>
      </div>
  )
}

export default Header