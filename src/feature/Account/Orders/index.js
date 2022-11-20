import React, { useEffect } from 'react'
// import { getAddOrder, getOrder, updateUser } from '../../../service/apiRequest'
// import { useDispatch } from 'react-redux'
// import { successToast, warnToast } from '../../../utils/toastify'
// import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import style from '../Profile/style.module.css'

const Orders = () => {
    return (
        <div className={style.account_page}>
            <Container>
                <Row >
                    <Dashboard />
                    <Col lg={9} >
                        <div className={style.account_page_header} class="d-md-block d-lg-flex">
                            <div className={style.titleWrap}>
                                <div class={style.title}>
                                    <i style={{ marginRight: "10px" }} class="bi bi-bag-fill"></i>
                                    <span style={{ color: "black" }}>My Orders</span>
                                </div>
                                <div className={style.show_dashboard_btn} class="d-lg-none d-block">
                                    <i class="bi bi-list"></i>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Orders
