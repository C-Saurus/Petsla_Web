import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import CartListPage from "../cartListPage";
import "../../../../asset/css/base.css";
import style from "./style.module.css";
import CustomerInfoPage from "../customerInfoPage"

const EntirePage = () => {
  const location = useLocation();

  const [page, setPage] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/cart":
        setPage(0);
        break;
      case "/customer-info":
        setPage(1);
        break;
      default:
        setPage(0);
    }
  }, [location]);

  return (
    <React.Fragment>
      <div className="cart-page">
        <div className="container">
          <div className="row ">
            <div className="col ll-12 mm-12 ss-12">
              <div className={style.cartPageList}>
                <Link
                  to="/cart"
                  style={{
                    textDecoration: !page ? "none" : "",
                    textDecorationColor: !page ? "" : "black",
                    color: !page ? "#e69646" : "black",
                  }}
                >
                  <div className={style.cartPageListItem}>Cart</div>
                </Link>
                <div className={style.cartPageListItem}>/</div>
                <Link
                  to="/customer-info"
                  style={{
                    textDecoration: page ? "none" : "",
                    textDecorationColor: page ? "" : "black",
                    color: page ? "#e69646" : "black",
                  }}
                >
                  <div className={style.cartPageListItem}>CustomerInfo</div>
                </Link>
              </div>
            </div>
          </div>
          {!page ? <CartListPage /> : <CustomerInfoPage />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default EntirePage;
