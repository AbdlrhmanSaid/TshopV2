// Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { selectLanguage } from "../rtk/slices/deflanSlice";
import { useSelector } from "react-redux";
const Footer = () => {
  const isEnglish = useSelector(selectLanguage);
  return (
    <footer className="bg-dark text-light">
      <Container className="pt-3">
        <Row>
          <Col lg={4} md={6} sm={12}>
            {isEnglish ? (
              <>
                <h5>Contact Us</h5>
                <p>Email: bodesaid3@gmail.com</p>
                <p>Phone: 01207634290</p>
              </>
            ) : (
              <>
                <h5>تواصل معنا</h5>
                <p>bodesaid3@gmail.com : البريد</p>
                <p> 01207634290 :الهاتف</p>
              </>
            )}
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>{isEnglish ? "Follow Us" : "تابعنا"}</h5>
            <p className=" link-primary">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
            <p className="link-info">
              <a
                href="https://www.X.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </p>
            <p className="link-danger">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <h5>{isEnglish ? "Newsletter" : "النشرة الاخبارية"}</h5>
            <p>
              {isEnglish
                ? "Subscribe to our newsletter for updates"
                : "تابعنا لمعرفة اخر اخبرنا"}
            </p>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} Your Store.{" "}
        {isEnglish ? "All rights reserved." : "كل الحقوق محفوظه"}
      </div>
    </footer>
  );
};

export default Footer;
