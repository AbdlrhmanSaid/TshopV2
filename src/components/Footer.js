// Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container className="pt-3">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123456789</p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Follow Us</h5>
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
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
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
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} Your Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
