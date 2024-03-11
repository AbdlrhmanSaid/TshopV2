import React from "react";
import { Modal, Row, Col, Button, Image } from "react-bootstrap";

const OrderDetailsModal = ({ show, handleClose, isEnglish, selectedOrder }) => {
  const renderOrderProducts = () => {
    return (
      <Modal.Body>
        {selectedOrder && (
          <Row xs={1} md={1} lg={1}>
            {selectedOrder.products.map((product, index) => (
              <Col key={index} className="bg-white col-color rounded mb-2">
                <div className="line my-2 d-flex justify-content-between align-items-center">
                  <div className="box1 me-1 w-25">
                    <Image className="min-pic" src={product.image} />
                  </div>
                  <div className="box2 text-black w-75">
                    <p className="m-0">{product.title}</p>
                    <p className="m-0">${product.price}</p>
                    <p className="m-0 text-white mt-2 d-flex align-items-center">
                      <span className="bg-secondary mx-1 px-3 rounded click">
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
    );
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEnglish ? "Order Details" : "تفاصيل الطلب"}
        </Modal.Title>
      </Modal.Header>
      {renderOrderProducts()}
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          {isEnglish ? "Close" : "اغلاق"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailsModal;
