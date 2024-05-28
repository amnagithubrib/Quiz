import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Programs</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Follow Us</h5>
            <p>Connect with us on social media:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;