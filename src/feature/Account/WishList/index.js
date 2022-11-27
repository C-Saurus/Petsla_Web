import React, { useEffect } from 'react'
// import { getAddOrder, getOrder, updateUser } from '../../../service/apiRequest'
// import { useDispatch } from 'react-redux'
// import { successToast, warnToast } from '../../../utils/toastify'
// import { useNavigate } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import style from '../Profile/style.module.css'
import { accountPageSlice } from '../service/accountPageSlice'
const Wishlist = () => {

    const dispatch = useDispatch()

    const handleShowDashboardbtn = () => {

        dispatch(accountPageSlice.actions.displaySideDashboard(true))
    }

    return (
        <Col lg={9} >
            <div className="d-md-block d-lg-flex">
                <div className={style.titleWrap}>
                    <div className={style.title}>
                        <i style={{ marginRight: "10px" }} className="bi bi-heart-fill"></i>
                        <span style={{ color: "black" }}>My Wishlist</span>
                    </div>
                    <div className="d-lg-none d-block">
                        <i onClick={handleShowDashboardbtn} className="bi bi-list"></i>
                    </div>
                </div>

                <button className={style.editBtn}>Add all to cart
                </button>

            </div>
        </Col>
    )
}
export default Wishlist