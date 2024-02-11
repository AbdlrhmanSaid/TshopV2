import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUserData } from "../rtk/slices/userSlice";

const ContactUs = () => {
  const userData = useSelector(selectUserData);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [socialLinks, setSocialLinks] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const isSubmitDisabled = !name || !contactNumber || !socialLinks;

  const handleSubmit = () => {
    handleCloseModal();
  };

  return (
    <>
      <h1>Contact Us</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formContactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSocialLinks">
          <Form.Label>Social Links</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your social links"
            value={socialLinks}
            onChange={(e) => setSocialLinks(e.target.value)}
          />
        </Form.Group>

        {/* استخدم الشرط لتحديد حالة التفعيل/التعطيل */}
        <Button
          variant="primary"
          onClick={handleShowModal}
          className="mt-2"
          disabled={isSubmitDisabled}
        >
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Thanks {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your information has been submitted. We will get in touch with you
          soon.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUs;
