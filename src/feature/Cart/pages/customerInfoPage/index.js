import React from "react";
import {
  Form,
  Row,
  Col,
  Card,
  FloatingLabel,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ThisButton from "../../components/Button";
import style from "./style.module.css";
export default function CustomerInfoPage({ totalItems, totalPrice }) {
  return (
    <React.Fragment>
      <Form>
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
                  <Form.Control
                    className={style.formControl}
                    type="text"
                    placeholder="Full name"
                    disabled
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>PhoneNumber</Form.Label>
                  <Form.Control
                    className={style.formControl}
                    type="text"
                    placeholder="Phone number"
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    className={style.formControl}
                    type="text"
                    placeholder="Address"
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Note</Form.Label>
                  <FloatingLabel controlId="floatingTextarea" label="Note">
                    <Form.Control
                      className={style.formControl}
                      as="textarea"
                      placeholder="Leave a comment here"
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
                      <ThisButton outline={true} name={"Next"} />
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
