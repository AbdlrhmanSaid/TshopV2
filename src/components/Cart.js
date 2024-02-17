import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCheck,
  faTimes,
  faBoxOpen,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Image, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { selectUserData } from "../rtk/slices/userSlice";
import { deleteFromCart, clearCart } from "../rtk/slices/cartSlice";
import { addOrder } from "../rtk/slices/orderSlice";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import empty from "../imgs/empty.png";

export const Cart = () => {
  const isEnglish = useSelector(selectLanguage);
  const userData = useSelector(selectUserData);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * (999 - 100 + 1) + 100)
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const handleDoneClick = () => {
    const orderData = {
      orderNumber: randomNum,
      products: cart.map((product) => ({
        id: product.id,
        title: product.title,
        quantity: product.quantity,
        price: product.price,
        image: product.image,
      })),
      totalPrice: totalPrice,
      orderTime: new Date().toLocaleTimeString(),
      orderDate: new Date().toLocaleDateString(),
      username: userData.username,
      address: {
        city: userData.address.city,
        town: userData.address.twon,
        details: userData.address.details,
      },
    };

    dispatch(addOrder(orderData));
    dispatch(clearCart());
    setRandomNum(Math.floor(Math.random() * (999 - 100 + 1) + 100));
    handleModalShow();
  };

  const showCancelAlert = () => {
    {
      isEnglish ? (
        <>
          {Swal.fire({
            title: "Cancel?",
            icon: "error",
            showCancelButton: true,
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          })}
        </>
      ) : (
        <>
          {Swal.fire({
            title: "الغاء?",
            icon: "error",
            showCancelButton: true,
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          })}
        </>
      );
    }
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="z-3 cart-icon shadow"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="total-length w-25 h-25 "> {cart.length}</span>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5>
              {isEnglish ? "Cart " : "عربة التسوق"}
              <FontAwesomeIcon icon={faCartShopping} />
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <>
              <div className="w-100 text-center mt-3">
                <h2>cart is Empty</h2>
                <img src={empty} style={{ width: "90%" }} className="mt-3" />
              </div>
            </>
          ) : (
            <div className="cart">
              <div className="header">
                <h2 className="mb-3">
                  {isEnglish ? "Products : " : " عدد المنتجات : "}
                  {cart.length}
                </h2>
                <h5 className="my-3">
                  {isEnglish ? "Order Number : " : " طلب رقم : "}
                  {randomNum}
                </h5>
                <Button
                  variant="danger"
                  className="m-3 mt-0"
                  onClick={() => dispatch(clearCart())}
                >
                  {isEnglish ? "Clear All" : "مسح الكل"}
                </Button>
              </div>
              <div className="products h-50 px-3 ">
                <div className="catch mt-3 ">
                  <Row xs={1} md={1} lg={1}>
                    {cart.map((product, index) => (
                      <Col
                        key={index}
                        className="bg-white col-color rounded mb-2"
                      >
                        <div className="line my-2 d-flex justify-content-between align-items-center  ">
                          <div className="box1 me-1">
                            <Image className="min-pic" src={product.image} />
                          </div>
                          <div className="box2 text-black">
                            <p className="m-0">{product.title}</p>
                            <p className="m-0">${product.price}</p>
                            <p className="m-0 text-white mt-2 d-flex  align-items-center ">
                              <span className="bg-secondary mx-1 px-3  rounded click">
                                {product.quantity}
                              </span>
                            </p>
                          </div>
                          <div className="delBtn">
                            <Button
                              variant="danger"
                              onClick={() => dispatch(deleteFromCart(product))}
                              className="rounded-circle"
                            >
                              <FontAwesomeIcon icon={faX} />
                            </Button>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
              <div className="done mb-3 h-25">
                <h3 className="mx-3">
                  {isEnglish ? "Total:" : "المجموع:"}
                  {totalPrice.toFixed(2)}
                </h3>
                <Button
                  variant="success"
                  className="mx-2"
                  onClick={handleModalShow}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </Button>
                <Button
                  variant="danger"
                  onClick={showCancelAlert}
                  className="mx-2"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </Button>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>
            {isEnglish ? "Order Confirmation" : "اتمام الطلب"}
            <FontAwesomeIcon icon={faCartShopping} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>
            {isEnglish ? "Thanks" : "شكرا"}-{""}
            {userData.username}
          </h2>
          <p>
            {" "}
            {isEnglish ? "Order Number:" : " طلب رقم : "}
            {randomNum}
          </p>
          <p>
            {isEnglish ? " To::" : "  الي : "}{" "}
            {`${userData.address.city},${userData.address.twon},${userData.address.details}`}
          </p>
          <p>
            {isEnglish ? "Date: " : " التاريخ : "}
            {new Date().toLocaleDateString()}
          </p>
          <p>
            {isEnglish ? "Time:" : " الوقت : "}
            {new Date().toLocaleTimeString()}
          </p>
          <h4>
            {isEnglish ? "Price:" : "  المبلغ الكلي : "}
            {totalPrice.toFixed(2)}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              handleDoneClick();
              handleModalClose();
              handleClose();
            }}
          >
            {isEnglish ? " Done" : "تأكيد"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
