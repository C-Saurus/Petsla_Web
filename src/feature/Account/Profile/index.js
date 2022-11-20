import React, { useEffect } from 'react'
import { getAddOrder, getOrder, updateUser } from '../../../service/apiRequest'
import { useDispatch } from 'react-redux'
import { successToast, warnToast } from '../../../utils/toastify'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import style from './style.module.css'
import { useState } from 'react'

const Profile = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [eMail, setMail] = useState("abc@gmail.com");
    const [phone, setPhone] = useState("");

    const [isEdit, setIsEdit] = useState(false)

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            warnToast('Bạn cần đăng nhập trước!')
            navigate('/login')
        }
    }, [token, navigate])
    const handleEditClick = () => {
        setIsEdit(!isEdit)
    }
    
    const handleEmailChange = (e) =>{
        setMail(e.target.value)
    }
    const handleFirstChange = (e) =>{
        setFirst(e.target.value)
    }
    const handleLastChange = (e) =>{
        setLast(e.target.value)
    }
    const handlePhoneChange = (e) =>{
        setPhone(e.target.value)
    }
    const newProfile = {
        email: 'datVH123@gmail.com',
        first_name: 'Panther',
        last_name: 'Black',
        name: 'LMI9',
        username: 'BlackPanther2002'
    }
    const newOrder = {
        address: 'HNNHNNDD',
        note: '',
        number_phone: '14332532',
        orderItems: [{ product_id: 1, quantity: 1, price: 350000 }],
        total_price: 1
    }
    const dispatch = useDispatch();
    const handleEdit = () => {
        getAddOrder(localStorage.getItem("token"), dispatch, newOrder).then(() => {
            successToast('Đã cập nhật thành công')
        })
    }
    return (
        <div className={style.account_page}>
            <Container>
                <Row >
                    <Dashboard />
                    <Col lg={9} >
                        <div className={style.account_page_header} class="d-md-block d-lg-flex">
                            <div className={style.titleWrap}>
                                <div class={style.title}>
                                    <i style={{ marginRight: "10px" }} class="bi bi-person-fill"></i>
                                    <span style={{ color: "black" }}>My Profile</span>
                                </div>
                                <div className={style.show_dashboard_btn} class="d-lg-none d-block">
                                    <i class="bi bi-list"></i>
                                </div>
                            </div>

                            <button onClick={handleEditClick} className={style.editBtn}>{isEdit === true ? "Save" : "Edit Profile"}
                            </button>

                        </div>
                        <div className={style.profileInfo} class="d-lg-flex d-sm-block d-md-flex bg-light" style={{ justifyContent: "space-between", backgroundColor: "transparent", marginTop: "10px" }}>
                            <Col lg={6} sm={12} md={6} className="shadow-sm rounded d-flex" style={{ justifyContent: "space-between", backgroundColor: "white" }}>
                                <dis className="d-flex" style={{ backgroundColor: "white" }}>
                                    <div className={style.profileImg}>

                                    </div>
                                    <div style={{ padding: "20px 0", fontSize: "1.15rem" }}>
                                        <div>Name</div>
                                        <div >UserName</div>
                                    </div>
                                </dis>
                                <div style={{ padding: "35px 20px", fontSize: "1.4rem" }}>Diamond User</div>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="d-lg-flex"
                                style={{ backgroundColor: "white", justifyContent: "space-around" }}>
                                <Col className="d-flex lg-6 md-6 sm-12" style={{ justifyContent: "space-around" }}>
                                    <Col lg={5} md={5} sm={6} className="shadow-sm rounded"
                                        style={{ backgroundColor: "white", padding: "10px 0" }}>
                                        <div className={style.order_card_amount}>10</div>
                                        <div className={style.order_card_title}>Pending</div>
                                    </Col>
                                    <Col lg={5} md={5} sm={6} className="shadow-sm rounded"
                                        style={{ backgroundColor: "white", padding: "10px 0" }}>
                                        <div className={style.order_card_amount}>11</div>
                                        <div className={style.order_card_title}>Shipping</div>
                                    </Col>
                                </Col>
                                <Col className="d-flex lg-6 md-6 sm-12" style={{ justifyContent: "space-around" }}>
                                    <Col lg={5} md={5} sm={6} className="shadow-sm rounded"
                                        style={{ backgroundColor: "white", padding: "10px 0" }}>
                                        <div className={style.order_card_amount}>12</div>
                                        <div className={style.order_card_title}>Delivered</div>
                                    </Col>
                                    <Col lg={5} md={5} sm={6} className="shadow-sm rounded"
                                        style={{ backgroundColor: "white", padding: "10px 0" }}>
                                        <div className={style.order_card_amount}>13</div>
                                        <div className={style.order_card_title}>Canceled</div>
                                    </Col>
                                </Col>
                            </Col>
                        </div>
                        <Card style={{ marginTop: "10px", fontSize: "1.3rem" }}>
                            <Card.Body>
                                <Form.Group >
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control
                                        className={style.formControl}
                                        type="text"
                                        disabled = {!isEdit}
                                        value = {first}
                                        onChange = {handleFirstChange}

                                    />
                                </Form.Group>
                                <Form.Group className="my-3">
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control
                                        className={style.formControl}
                                        type="text"
                                        disabled = {!isEdit}
                                        value = {last}
                                        onChange = {handleLastChange}
                                    />
                                </Form.Group>
                                <Form.Group className="my-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        className={style.formControl}
                                        type="text"
                                        disabled = {!isEdit}
                                        value = {eMail}

                                        onChange = {handleEmailChange}
                                    />
                                </Form.Group>
                                <Form.Group className="my-3">
                                    <Form.Label>Phone Number:</Form.Label>
                                    <Form.Control
                                        className={style.formControl}
                                        type="text"
                                        disabled = {!isEdit}
                                        value = {phone}
                                        onChange = {handlePhoneChange}
                                    />
                                </Form.Group>

                                <div className='gender' >
                                    <div>Gender</div>
                                    <div className='d-flex justify-content-between'>
                                        <div class="form-check" disabled = {!isEdit}>
                                            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="male" checked />Male
                                            <label class="form-check-label" for="radio1"></label>
                                        </div>
                                        <div class="form-check" disabled = {!isEdit}>
                                            <input type="radio" class="form-check-input" id="radio2" name="optradio" value="female" />Female
                                            <label class="form-check-label" for="radio2"></label>
                                        </div>
                                        <div class="form-check" disabled = {!isEdit}>
                                            <input type="radio" class="form-check-input" id="radio3" name="optradio" value="others" />Others
                                            <label class="form-check-label" for="radio3"></label>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Profile;
