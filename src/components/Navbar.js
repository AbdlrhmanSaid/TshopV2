import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Row,
  Col,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { selectLanguage, setLanguage } from "../rtk/slices/deflanSlice";
import { clearUserData } from "../rtk/slices/userSlice";
import Swal from "sweetalert2";

function NavbarApp() {
  const isEnglish = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleLanguageChange = (isEnglish) => {
    dispatch(setLanguage(isEnglish));
  };

  const handleCloseLogout = () => setShow(false);
  const handleShowLogout = () => setShow(true);

  const isLogin = useSelector((state) => state.user.isLogin);

  const handleLogout = () => {
    dispatch(clearUserData());
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ShopEmpire</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isEnglish ? (
              <>
                <Link to="/" className="text-decoration-none">
                  <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Link to="/Profile" className="text-decoration-none">
                  <Nav.Link href="#Profile">Profile</Nav.Link>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-decoration-none">
                  <Nav.Link href="#home">الرئيسية</Nav.Link>
                </Link>
                <Link to="/Profile" className="text-decoration-none">
                  <Nav.Link href="#Profile">الصفحة الشخصية</Nav.Link>
                </Link>
              </>
            )}
            <NavDropdown
              title={isEnglish ? "More" : "المزيد"}
              id="basic-nav-dropdown"
            >
              <Link to="/Settings" className="text-decoration-none">
                <NavDropdown.Item href="#Settings">
                  {isEnglish ? "Settings" : "الاعدادات"}
                </NavDropdown.Item>
              </Link>
              <Link to="/Orders" className="text-decoration-none">
                <NavDropdown.Item href="#Orders">
                  {isEnglish ? "Orders" : "الطلبات"}
                </NavDropdown.Item>
              </Link>
              <Link to="/Contact" className="text-decoration-none">
                <NavDropdown.Item href="#Contact">
                  {isEnglish ? "Contact Us" : "تواصل معنا"}
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown
              title={isEnglish ? "Language" : "اللغة"}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleLanguageChange(true)}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLanguageChange(false)}>
                العربية
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={(e) => e.preventDefault()}>
            <Row className="justify-content-center">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder={isEnglish ? "Search" : "بحث"}
                  className="mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                {isLogin ? (
                  <Button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    {/* اريد عند الضغط علي هذا الزر  */}
                  </Button>
                ) : (
                  <Button type="submit" onClick={() => notLogin()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
          {isLogin ? (
            <>
              <Button
                variant="primary"
                onClick={handleShowLogout}
                className="ms-3"
              >
                {isEnglish ? "Log Out" : " سجل الخروج"}
                <FontAwesomeIcon
                  className="ms-1"
                  icon={faRightToBracket}
                />{" "}
              </Button>
              {isEnglish ? (
                <Modal show={show} onHide={handleCloseLogout}>
                  <Modal.Header>
                    <Modal.Title>Logout Confirmation</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to logout?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogout}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={handleLogout}>
                      Logout
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : (
                <Modal show={show} onHide={handleCloseLogout}>
                  <Modal.Header>
                    <Modal.Title>تأكيد تسجيل الخروج</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>هل انت متأكد من تسجيل الخروج؟</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogout}>
                      الغاء
                    </Button>
                    <Button variant="primary" onClick={handleLogout}>
                      نعم
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </>
          ) : (
            <Link to="/Login" className="ms-3">
              <Button variant="primary">
                {isEnglish ? "Log in" : " سجل الدخول"}
              </Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  function notLogin() {
    if (isEnglish) {
      Swal.fire({
        title: "<strong>Please Login First</strong>",
        icon: "error",
        html: `
      <a href="/Login">
      <button type="button" class="btn btn-primary">Log In</button>
      </a>
    `,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "<strong>من فضلك سجل اولا</strong>",
        icon: "error",
        html: `
      <a href="/Login">
      <button type="button" class="btn btn-primary">تسجيل الدخول</button>
      </a>
    `,
        showConfirmButton: false,
      });
    }
  }
}

export default NavbarApp;
