import React, { useEffect } from 'react'
// import { getAddOrder, getOrder, updateUser } from '../../../service/apiRequest'
// import { useDispatch } from 'react-redux'
// import { successToast, warnToast } from '../../../utils/toastify'
// import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import style from '../Profile/style.module.css'
import { warnToast } from '../../../utils/toastify'
import { useNavigate } from 'react-router'
import { getOrder } from '../../../service/apiRequest'
import { useDispatch } from 'react-redux'

const Orders = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const ditpatch = useDispatch()
    useEffect(() => {
        if (!token) {
            warnToast('Bạn cần đăng nhập trước!')
            navigate('/login')
        }
    }, [token, navigate, ditpatch])
    getOrder(token, ditpatch)
    const listOrder = JSON.parse(localStorage.getItem('list_Order'))
    // render listOrder ra là xong :<
    return (
        <div className={style.account_page}>
            <Container>
                <Row >
                    <Dashboard />
                    <Col lg={9} >
                        <div className={style.account_page_header} class="d-md-block d-lg-flex">
                            <div className={style.titleWrap}>
                                <div className={style.title}>
                                    <i style={{ marginRight: "10px" }} className="bi bi-bag-fill"></i>
                                    <span style={{ color: "black" }}>My Orders</span>
                                </div>
                                <div className={style.show_dashboard_btn} class="d-lg-none d-block">
                                    <i className="bi bi-list"></i>
                                </div>
                            </div>
                        </div>
                        <div>Hello</div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Orders
