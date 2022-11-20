import React from "react";
// import CartItem from "../../components/CartItem";
import { Container, Card, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThisButton from "../../components/Button";
import style from "./style.module.css";
import CartPopUpItem from "../../../../components/CartPopUp/CartPopUpItem";
export default function CartListPage({ cartList, totalItems, totalPrice }) {
  return (
    <React.Fragment>
      <Row>
        {/* Cart*/}
        <Col lg={8} md={7} sm={12}>
          <Card>
            <Card.Header className="text-center" style={{ fontWeight: "600" }}>
              Cart
            </Card.Header>
            <Card.Body>
              {cartList.map((item) => (
                <Card>
                  <CartPopUpItem key={item.id} item={item} />
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
        {/* Bill */}
        <Col lg={4} md={5} sm={12}>
          <Card>
            <Container>
              <div style={{ padding: "0 0.5rem" }}>
                <div style={{ padding: "1rem 0" }}>
                  <Row style={{ flexWrap: "nowrap!important" }}>
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
                <Form>
                  <Row>
                    <Form.Group className="my-3">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control
                        className={style.formControl}
                        type="text"
                        placeholder="Full name"
                        disabled
                      />
                    </Form.Group>
                  </Row>
                  <Row className="text-center">
                    <div style={{ margin: "-0.5rem 0" }}>
                      {" "}
                      <Link to="/customer-info">
                        <ThisButton outline={false} name={"Voucher"} />
                      </Link>
                    </div>
                  </Row>
                </Form>
                <Row className="text-center">
                  <div style={{ margin: "-0.5rem 0 0" }}>
                    {" "}
                    <Link to="/customer-info">
                      <ThisButton outline={true} name={"Checkout"} />
                    </Link>
                  </div>
                </Row>
              </div>
            </Container>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
