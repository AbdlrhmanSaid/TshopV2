// Orders.js

import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectOrders, deleteOrder } from "../rtk/slices/orderSlice";
import { Link } from "react-router-dom";
import { selectUserData } from "../rtk/slices/userSlice";
import { addDays, format } from "date-fns";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import { Container } from "react-bootstrap";

function Orders() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const orders = useSelector(selectOrders);
  const userData = useSelector(selectUserData);
  const isEnglish = useSelector(selectLanguage);

  const handleClose = () => {
    setShow(false);
    setSelectedOrder(null);
  };

  const handleShow = (order) => {
    setShow(true);
    setSelectedOrder(order);
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder({ id: orderId }));
  };

  return (
    <>
      <Container>
        {isEnglish ? (
          <div className="oreders" style={{ margin: "20px 0 10% 0" }}>
            <h3>Orders : {orders.length}</h3>
            {orders.length === 0 ? (
              <>
                <Button
                  variant="danger mt-3"
                  onClick={() => setShowCancelModal(true)}
                  disabled
                >
                  Cancel Order
                </Button>
                <Card
                  style={{ width: "18rem", margin: "5% 0 0 0 " }}
                  className=" w-100 "
                >
                  <Card.Body>
                    <Card.Title>No Orders Yet</Card.Title>
                    <Card.Text>
                      You can explore more amazing products and shop at the best
                      prices. Move here to see for yourself.
                    </Card.Text>
                    <Link to={"/"}>
                      <Button variant="primary">Shop Now</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </>
            ) : (
              <>
                <Button
                  variant="danger mt-3"
                  onClick={() => setShowCancelModal(true)}
                >
                  Cancel Your Orders
                </Button>
                <Row xs={1} md={2} lg={3}>
                  {orders.map((order) => (
                    <Col key={order.orderNumber} className="mt-3 p-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <h2>Order Number : {order.orderNumber}</h2>
                          <Card.Text>
                            <h4>Name</h4> : {userData.username}
                          </Card.Text>
                          <Card.Text>
                            <h4>Phone</h4> : {userData.phone}
                          </Card.Text>
                          <Card.Text>
                            <h4>Address</h4> : {userData.address.city},{" "}
                            {userData.address.twon}, {userData.address.details}
                          </Card.Text>
                          <Card.Text>
                            <h4>Order Time</h4> : {order.orderTime}
                          </Card.Text>
                          <Card.Text>
                            <h4>Order Date</h4> :{" "}
                            {format(new Date(order.orderDate), "dd/MM/yyyy")}
                          </Card.Text>
                          <Card.Text>
                            <h4>Delivery Day</h4> :{" "}
                            {format(
                              addDays(new Date(order.orderDate), 2),
                              "dd/MM/yyyy"
                            )}
                          </Card.Text>
                          <Card.Text>
                            <h4>Total Price</h4> : ${order.totalPrice}
                          </Card.Text>
                          <Card.Text>
                            <h4>Status</h4> : Preparing your order
                          </Card.Text>
                          <Button
                            variant="primary"
                            onClick={() => handleShow(order)}
                          >
                            Show Order Details
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </div>
        ) : (
          <div className="oreders" style={{ margin: "20px 0 10% 0" }}>
            <h3>الطلبات : {orders.length}</h3>
            {orders.length === 0 ? (
              <>
                <Button
                  variant="danger mt-3"
                  onClick={() => setShowCancelModal(true)}
                  disabled
                >
                  الغاء الطلب
                </Button>
                <Card
                  style={{ width: "18rem", margin: "5% 0 0 0 " }}
                  className=" w-100 "
                >
                  <Card.Body>
                    <Card.Title>لا يوجد طلبات بعد.</Card.Title>
                    <Card.Text>
                      يمكنك التسوق بنفسك ورؤية بعض المنتجات الرائعه وبأسعار
                      مميزه!
                    </Card.Text>
                    <Link to={"/"}>
                      <Button variant="primary">تسوق الان</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </>
            ) : (
              <>
                <Button
                  variant="danger mt-3"
                  onClick={() => setShowCancelModal(true)}
                >
                  الغاء طلباتك
                </Button>
                <Row xs={1} md={2} lg={3}>
                  {orders.map((order) => (
                    <Col key={order.orderNumber} className="mt-3 p-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <h2>رقم الطلب : {order.orderNumber}</h2>
                          <Card.Text>
                            <h4>الاسم</h4> : {userData.username}
                          </Card.Text>
                          <Card.Text>
                            <h4>الهاتف</h4> : {userData.phone}
                          </Card.Text>
                          <Card.Text>
                            <h4>العنوان</h4> : {userData.address.city},{" "}
                            {userData.address.twon}, {userData.address.details}
                          </Card.Text>
                          <Card.Text>
                            <h4>وقت الطلب </h4> : {order.orderTime}
                          </Card.Text>
                          <Card.Text>
                            <h4>تاريخ الطلب </h4> :{" "}
                            {format(new Date(order.orderDate), "dd/MM/yyyy")}
                          </Card.Text>
                          <Card.Text>
                            <h4> يصل يوم</h4> :{" "}
                            {format(
                              addDays(new Date(order.orderDate), 2),
                              "dd/MM/yyyy"
                            )}
                          </Card.Text>
                          <Card.Text>
                            <h4> الحساب الكلي</h4> : ${order.totalPrice}
                          </Card.Text>
                          <Card.Text>
                            <h4>حالة الطلب</h4> : قيد التجهيز
                          </Card.Text>
                          <Button
                            variant="primary"
                            onClick={() => handleShow(order)}
                          >
                            رؤية تفاصيل الطلب
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </div>
        )}
        {isEnglish ? (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedOrder && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.products.map((product, index) => (
                      <tr key={index} className="my-1">
                        <td>
                          <Image
                            className="min-pic"
                            src={product.image}
                            roundedCircle
                          />
                        </td>
                        <td>
                          <p>${product.price}</p>
                        </td>
                        <td>
                          <p>{product.quantity}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title> تفاصيل الطلب</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedOrder && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>الصوره</th>
                      <th>السعر</th>
                      <th>الكمية</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.products.map((product, index) => (
                      <tr key={index} className="my-1">
                        <td>
                          <Image
                            className="min-pic"
                            src={product.image}
                            roundedCircle
                          />
                        </td>
                        <td>
                          <p>${product.price}</p>
                        </td>
                        <td>
                          <p>{product.quantity}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                اغلاق
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {isEnglish ? (
          <Modal
            show={showCancelModal}
            onHide={() => setShowCancelModal(false)}
          >
            <Modal.Header closeButton className="bg-danger">
              <Modal.Title>Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>Which order would you like to cancel?</Modal.Body>
            <Modal.Footer>
              <div>
                {orders.map((order) => (
                  <div
                    className="d-flex mb-3  justify-content-center "
                    key={order.id}
                  >
                    <h2>Order Number: {order.orderNumber}</h2>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteOrder(order.id)}
                      className="ms-3"
                    >
                      Cancel Order
                    </Button>
                  </div>
                ))}
              </div>
            </Modal.Footer>
          </Modal>
        ) : (
          <Modal
            show={showCancelModal}
            onHide={() => setShowCancelModal(false)}
          >
            <Modal.Header closeButton className="bg-danger">
              <Modal.Title>طلباتك</Modal.Title>
            </Modal.Header>
            <Modal.Body>ما الطلب الذي تريد الغاءه؟</Modal.Body>
            <Modal.Footer>
              <div>
                {orders.map((order) => (
                  <div
                    className="d-flex mb-3  justify-content-center "
                    key={order.id}
                  >
                    <h2>طلب رقم : {order.orderNumber}</h2>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteOrder(order.id)}
                      className="ms-3"
                    >
                      الغاء الطلب
                    </Button>
                  </div>
                ))}
              </div>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </>
  );
}

export default Orders;
