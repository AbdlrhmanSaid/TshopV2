import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUserData } from "../rtk/slices/userSlice";
import { selectLanguage } from "../rtk/slices/deflanSlice";

const ContactUs = () => {
  const isEnglish = useSelector(selectLanguage);

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
      <h1 className="mt-3">{isEnglish ? "Contact Us" : "تواصل معنا"}</h1>
      <Form>
        <Form.Group controlId="formName" className="mt-3">
          <Form.Label>{isEnglish ? "Name" : "الاسم"}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formContactNumber" className="mt-3">
          <Form.Label>
            {isEnglish ? "Contact Number" : "رقم التواصل"}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSocialLinks" className="mt-3">
          <Form.Label>{isEnglish ? "Social Links" : "اترك حساباتك"}</Form.Label>
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
          {isEnglish ? "Submit" : "ارسال"}
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>
            {isEnglish ? "Thanks" : "شكرا"}-{name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEnglish
            ? "Your information has been submitted. We will get in touch with you soon."
            : "تم تأكيد بياناتك سوف يتم التواصل معك في اقرب وقت"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {isEnglish ? "Close" : "اغلاق"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUs;
