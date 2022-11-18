import React, { Fragment, useState } from "react";
import logoIcon from "../../asset/logo.png";
import "./Header.css";
import "./responsive.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../service/apiRequest";
import ChangeLangPopOver from "../../components/language/languageChange";
import { successToast } from "../../utils/toastify/index";
import CartLogo from "../CartLogo";
import { FilterSlice } from "./filterSlice";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = localStorage.getItem("token");

  console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleLogout = (e) => {
    e.preventDefault();
    logOut(dispatch, navigate);
    successToast("Đăng xuất thành công!");
    navigate("/shop");
  };

  const [searchTxt, setSearchTxt] = useState("");
  const handleSearchInput = (e) => {
    setSearchTxt(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(FilterSlice.actions.setSearchText(searchTxt));
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </header>
      <div className="header__nav-first">
        <div className="container">
          <div className="header__nav-first-contact-wrap">
            <div className="header__nav-first-contact">
              <div className="header__nav-first-email">
                <i className="header__nav-first-email-iconn fa-regular fa-envelope"></i>
                <div className="header__nav-first-email-text">
                  petsla.vn@gmail.com
                </div>
              </div>
              <div className="header__nav-first-separate"></div>
              <div className="header__nav-first-phoneNum">
                <i className="header__nav-first-phoneNum-iconn fa-solid fa-phone"></i>
                <div className="header__nav-first-phoneNum-num">
                  0123 456 789
                </div>
              </div>
            </div>
            <div className="header__nav-firs-bgr">
              <Link to="/" className="header__nav-second-branch-link">
                <img
                  src={logoIcon}
                  alt=""
                  className="header__nav-second-branch-img"
                />
              </Link>
            </div>
            <div className="header__nav-first-listIcon">
              <div className="header__nav-first-listIcon-item">
                <div className="header__nav-first-listIcon-item1">
                  <ChangeLangPopOver />
                  <div className="header__nav-first-listIcon-item1-hover">
                    {t("content.theme")}
                  </div>
                </div>
              </div>
              <div className="header__nav-first-listIcon-item">
                <div className="header__nav-first-listIcon-item2">
                  <i className="header__nav-first-listIcon-item2-icon fa-solid fa-moon"></i>
                  <span className="header__nav-first-listIcon-item2-hover">
                    {t("content.theme")}
                  </span>
                </div>
              </div>
              <div className="header__nav-first-listIcon-item">
                {!user ? (
                  <button
                    className="header__nav-first-listIcon-item3"
                    onClick={handleLogin}
                  >
                    <i className="header__nav-first-listIcon-item3-icon fa-solid fa-arrow-right-to-bracket"></i>
                    <span className="header__nav-first-listIcon-item3-hover">
                      {t("content.login")}
                    </span>
                  </button>
                ) : (
                  <button
                    className="header__nav-first-listIcon-item3"
                    onClick={handleLogout}
                  >
                    <i className="header__nav-first-listIcon-item3-icon fa-solid fa-right-from-bracket"></i>
                    <span
                      className="header__nav-first-listIcon-item3-hover"
                      style={{ width: `100px` }}
                    >
                      {t("content.logout")}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__nav-second">
        <div className="container">
          <div className="header__nav-second-base">
            <div className="header__nav-second-branch">
              <Link to="/" className="header__nav-second-branch-link">
                <img
                  src={logoIcon}
                  alt=""
                  className="header__nav-second-branch-img"
                />
              </Link>
            </div>
            <div className="header__nav-second-search">
              <form action="">
                <div className="header__nav-second-search-form">
                  <input
                    onChange={handleSearchInput}
                    type="text"
                    name="search"
                    placeholder={t("content.title_text")}
                    className="header__nav-second-search-input"
                  />
                  <button
                    onClick={handleSearch}
                    type="submit"
                    className="header__nav-second-search-btn"
                  >
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
              <Link to="/" className="header__nav-third-link">
                {t("content.home")}
              </Link>
            </li>
            <li className="header__nav-third-item">
              <Link to="/shop" className="header__nav-third-link">
                {t("content.shop")}
              </Link>
            </li>
            <li className="header__nav-third-item">
              <Link to="/cart" className="header__nav-third-link">
                {t("content.cart")}
              </Link>
            </li>
            {/* <li className="header__nav-third-item">

                                <Link to='/contact' className="header__nav-third-link" >Contact</Link>
                            </li> */}
            <li className="header__nav-third-item">
              <Link to="/account/profile" className="header__nav-third-link">
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
