import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Modal,
  Container,
  Image,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectOrders, deleteOrder } from "../rtk/slices/orderSlice";
import { selectUserData } from "../rtk/slices/userSlice";
import { addDays, format } from "date-fns";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

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

  const renderCancelModalContent = () => {
    return (
      <>
        <Modal.Header closeButton className="bg-danger">
          <Modal.Title>{isEnglish ? "Your Order" : "طلباتك"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEnglish
            ? "Which order would you like to cancel?"
            : "ما الطلب الذي تريد الغاءه؟"}
        </Modal.Body>
        <Modal.Footer>
          <div>
            {orders.map((order) => (
              <div
                className="d-flex mb-3  justify-content-center"
                key={order.id}
              >
                <h2>
                  {isEnglish
                    ? `Order Number: ${order.orderNumber}`
                    : `طلب رقم : ${order.orderNumber}`}
                </h2>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteOrder(order.id)}
                  className="ms-3"
                >
                  {isEnglish ? "Cancel Order" : "الغاء الطلب"}
                </Button>
              </div>
            ))}
          </div>
        </Modal.Footer>
      </>
    );
  };

  return (
    <>
      <div className="orders" style={{ height: "100%", minHeight: "100vh" }}>
        <Container>
          <h3 className="mt-5">
            {isEnglish ? "Orders" : "الطلبات"} : {orders.length}
          </h3>
          {orders.length === 0 ? (
            <>
              <Button
                variant="danger mt-3"
                onClick={() => setShowCancelModal(true)}
                disabled
              >
                {isEnglish ? "Cancel Order" : "الغاء الطلب"}
              </Button>
              <Card
                style={{ width: "18rem", margin: "5% 0 0 0" }}
                className="w-100"
              >
                <Card.Body>
                  <Card.Title>
                    {isEnglish ? "No Orders Yet" : "لا يوجد طلبات بعد."}
                  </Card.Title>
                  <Card.Text>
                    {isEnglish
                      ? "You can explore more amazing products and shop at the best prices. Move here to see for yourself."
                      : "يمكنك التسوق بنفسك ورؤية بعض المنتجات الرائعة وبأسعار مميزة!"}
                  </Card.Text>
                  <Link to={"/shop"}>
                    <Button variant="primary">
                      {isEnglish ? "Shop Now" : "تسوق الان"}
                    </Button>
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
                {isEnglish ? "Cancel Your Orders" : "الغاء طلباتك"}
              </Button>
              <Row xs={1} md={2} lg={3}>
                {orders.map((order) => (
                  <Col key={order.orderNumber} className="mt-3 p-3 ">
                    <Card style={{ width: "100%" }} className=" shadow">
                      <Card.Body>
                        <h2>
                          {isEnglish ? "Order Number" : "رقم الطلب"}:{" "}
                          {order.orderNumber}
                        </h2>
                        <Card.Text>
                          <h4>{isEnglish ? "Name" : "الاسم"}</h4> :{" "}
                          {userData.username}
                        </Card.Text>
                        <Card.Text>
                          <h4>{isEnglish ? "Phone" : "الهاتف"}</h4> :{" "}
                          {userData.phone}
                        </Card.Text>
                        <Card.Text>
                          <h4>{isEnglish ? "Address" : "العنوان"}</h4> :{" "}
                          {userData.address.city}, {userData.address.twon},{" "}
                          {userData.address.details}
                        </Card.Text>
                        <Card.Text>
                          <h4>{isEnglish ? "Order Time" : "وقت الطلب"}</h4> :{" "}
                          {order.orderTime}
                        </Card.Text>
                        <Card.Text>
                          <h4>{isEnglish ? "Order Date" : "تاريخ الطلب"}</h4> :{" "}
                          {format(new Date(order.orderDate), "dd/MM/yyyy")}
                        </Card.Text>
                        <Card.Text>
                          <h4>{isEnglish ? "Delivery Day" : "يصل يوم"}</h4> :{" "}
                          {format(
                            addDays(new Date(order.orderDate), 2),
                            "dd/MM/yyyy"
                          )}
                        </Card.Text>
                        <Card.Text>
                          <h4>{isEnglish ? "Total Price" : "الحساب الكلي"}</h4>{" "}
                          : ${Math.floor(order.totalPrice)}
                        </Card.Text>
                        <Card.Text>
                          <h4>{isEnglish ? "Status" : "حالة الطلب"}</h4> :{" "}
                          {isEnglish ? "Preparing your order" : "قيد التجهيز"}
                        </Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => handleShow(order)}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Container>
      </div>
      <Container>
        {/* Show Order Details Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {isEnglish ? "Order Details" : "تفاصيل الطلب"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedOrder && (
              <Row xs={1} md={1} lg={1}>
                {selectedOrder.products.map((product, index) => (
                  <Col key={index} className="bg-white col-color rounded mb-2">
                    <div className="line my-2 d-flex justify-content-between align-items-center ">
                      <div className="box1 me-1 w-25">
                        <Image className="min-pic" src={product.image} />
                      </div>
                      <div className="box2 text-black w-75">
                        <p className="m-0">{product.title}</p>
                        <p className="m-0">${product.price}</p>
                        <p className="m-0 text-white mt-2 d-flex  align-items-center">
                          <span className="bg-secondary mx-1 px-3  rounded click">
                            {product.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr />
                  </Col>
                ))}
              </Row>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              {isEnglish ? "Close" : "اغلاق"}
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Cancel Order Modal */}
        <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)}>
          {renderCancelModalContent()}
        </Modal>
      </Container>
    </>
  );
}

export default Orders;
