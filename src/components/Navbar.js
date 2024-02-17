import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faAngleRight,
  faUser,
  faGlobe,
  faE,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { selectLanguage, setLanguage } from "../rtk/slices/deflanSlice";
import { clearUserData } from "../rtk/slices/userSlice";
import Swal from "sweetalert2";
import { selectUserData } from "../rtk/slices/userSlice";

function NavbarApp() {
  const userData = useSelector(selectUserData);

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
    <>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="  position-sticky top-0"
      >
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand href="#home">
              Shop
              <span className="bg-white text-black px-1">
                <FontAwesomeIcon icon={faE} />
              </span>
              mpire
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isEnglish ? (
                <>
                  <Link to="/" className="text-decoration-none">
                    <Nav.Link href="#home">Home</Nav.Link>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className="text-decoration-none">
                    <Nav.Link href="#home">الرئيسية</Nav.Link>
                  </Link>
                </>
              )}
              <Link to="/shop" className="text-decoration-none">
                <Nav.Link href="#shop">
                  <FontAwesomeIcon icon={faShop} />
                </Nav.Link>
              </Link>
              <Link to="/Profile" className="text-decoration-none">
                <Nav.Link href="#Profile">
                  <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
              </Link>
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
                <Link to="/Favorites" className="text-decoration-none">
                  <NavDropdown.Item href="#Favorites">
                    {isEnglish ? "Favorites" : "المفضلة"}
                  </NavDropdown.Item>
                </Link>
                <Link to="/Contact" className="text-decoration-none">
                  <NavDropdown.Item href="#Contact">
                    {isEnglish ? "Contact Us" : "تواصل معنا"}
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown
                title={<FontAwesomeIcon icon={faGlobe} />}
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
            {isLogin ? (
              <>
                <div className="details text-white d-flex align-items-center ">
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  <p className="m-0">{userData.username}</p>
                  <Button
                    variant="primary"
                    onClick={handleShowLogout}
                    className="ms-3 logbtn"
                  >
                    <FontAwesomeIcon className="" icon={faRightToBracket} />{" "}
                  </Button>
                </div>
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
                      <Button
                        variant="primary"
                        onClick={() => window.location.reload()}
                      >
                        نعم
                      </Button>
                    </Modal.Footer>
                  </Modal>
                )}
              </>
            ) : (
              <Link to="/Login" className="">
                <Button variant="primary logbtn">
                  {isEnglish ? "Log In" : "سجل الدخول"}
                  <FontAwesomeIcon icon={faAngleRight} className="mx-1" />
                </Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
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
