import React, {useState} from "react";
import {
  Form,
  Row,
  Col,
  Card,
  FloatingLabel,
  Container,
  Button
} from "react-bootstrap";
import style from "./style.module.css";
import styleBtn from '../../components/Button/style.module.css'
import { orderSchema } from "../../../../utils/validateForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorToast, successToast, warnToast } from "../../../../utils/toastify";
import { getAddOrder } from "../../../../service/apiRequest";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ThisButton from "../../components/Button";

export default function CustomerInfoPage({totalItems, totalPrice}) {
  const user = JSON.parse(localStorage.getItem("profile"))
  const cartItem = JSON.parse(localStorage.getItem("cartList")) || []
  const orderItems = cartItem.map((item) => {
    return {product_id: item.id, quantity: item.quantity, price: item.price}
  })

  const [phoneNum, setPhoneNum] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch()
  
  const newOrder = {
    address: address,
    note: note,
    number_phone: phoneNum,
    orderItems: orderItems,
    total_price: totalPrice,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(orderSchema)
  })

  const onSubmit = () => {
    setLoad(true)
    if (totalItems === 0) {
      warnToast('Giỏ hàng của bạn đang trống')
      setLoad(false)
    }
    else if(!localStorage.getItem('token')) {
      warnToast('Bạn cần đăng nhập trước')
      setLoad(false)
    }
    else {
      getAddOrder(localStorage.getItem("token"), dispatch, newOrder).then((res) => {
        if (res) {
          successToast('Đã đặt hàng thành công!')
        }
        else {
          errorToast('Hết hàng mất rồi :((')
        }
        setLoad(false)
      })
    }
  }
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          {/* CustomerInfo */}
          <Col lg={8} md={7} sm={12}>
            <Card>
              <Card.Header
                className="text-center"
                style={{ fontWeight: "600" }}
              >
                Thông tin giao hàng
              </Card.Header>
              <Card.Body>
                <Form.Group className="my-3">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control className={style.formControl} type="text" placeholder={user ? user.name : 'Full name'} disabled />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>PhoneNumber</Form.Label>
                  <Form.Control className={style.formControl} type="text" placeholder="Phone number" 
                    name="phoneNum"
                    value={phoneNum}
                    {...register("phoneNum")}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                  <Form.Text className='text-danger'>
                    {errors.phoneNum?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control className={style.formControl} type="text" placeholder="Address" 
                    name="address"
                    value={address}
                    {...register("address")}
                    onChange={e => setAddress(e.target.value)}
                  />
                  <Form.Text className='text-danger'>
                    {errors.address?.message}
                  </Form.Text>
                </Form.Group>
                
                <Form.Group className="my-3">
                  <Form.Label>Note</Form.Label>
                  <FloatingLabel controlId="floatingTextarea" label="Note">
                    <Form.Control
                      className={style.formControl}
                      as="textarea"
                      placeholder="Leave a comment here"
                      value={note}
                      onChange={e => setNote(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          {/* Bill */}
          <Col lg={4} md={5} sm={12}>
            <Card style={{ backgroundColor: "rgb(246, 249, 252)" }}>
              <Container>
                <div style={{ padding: "0 0.5rem" }}>
                  <div style={{ padding: "1rem 0" }}>
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <div>Quantity</div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <div className={style.textBold}>
                          {totalItems} {totalItems > 1 ? "items" : "item"}{" "}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <div>Total Price</div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <div className={style.textBold}>
                          {totalPrice.toLocaleString()}đ
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col lg={12} md={12} sm={12}>
                      <span style={{ fontWeight: "600" }}>Chú ý:</span>
                      <span>
                        {" "}
                        Hiện tại chúng tôi chỉ hỗ trợ thanh toán trực tiếp khi
                        nhận hàng.
                      </span>
                    </Col>
                  </Row>
                  <Row className="text-center">
                    <Col lg={6} md={6} sm={6}>
                      <Link to="/cart">
                        <ThisButton
                          outline={false}
                          name={"Back"}
                        />
                      </Link>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                      <Button type="submit" className={`${styleBtn.btn} ${styleBtn.btnType1}`} disabled={load}>
                        Next
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Card>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}
