import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import styleBtn from "../../components/Button/style.module.css";
import CartPopUpItem from "../../../../components/CartPopUp/CartPopUpItem";
import noProduct from "../../../../asset/image/no_product.png";

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
            {!totalItems ? (
              <div className="top-cart-body">
                <div className="no__product" style={{ display: "flex" }}>
                  <img src={noProduct} alt="" className="no__product-img" />
                  <h3 className="no__product-title">
                    There's no item in cart!
                  </h3>
                </div>
              </div>
            ) : (
              <Card.Body>
                {cartList.map((item) => (
                  <Card key={item.id}>
                    <CartPopUpItem key={item.id} item={item} />
                  </Card>
                ))}
              </Card.Body>
            )}
          </Card>
        </Col>
        {/* Bill */}
        <Col lg={4} md={5} sm={12}>
          <Card>
            <Container>
              <div style={{ padding: "0 0.5rem" }}>
                <div style={{ padding: "1rem 0 0" }}>
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
                      <Form.Control
                        className={style.formControl}
                        type="text"
                        placeholder="voucher"
                        disabled
                      />
                    </Form.Group>
                  </Row>
                  <Row className="text-center">
                    <div style={{ margin: "-0.5rem 0" }}>
                      {" "}
                      <Link to="/customer-info">
                        <Button
                          className={`${styleBtn.btn} ${styleBtn.btnType2}`}
                        >
                          Voucher
                        </Button>
                      </Link>
                    </div>
                  </Row>
                </Form>
                <Row className="text-center">
                  <div style={{ margin: "-0.5rem 0 0" }}>
                    {" "}
                    <Link to="/customer-info">
                      <Button
                        className={`${styleBtn.btn} ${styleBtn.btnType1}`}
                      >
                        Checkout
                      </Button>{" "}
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
