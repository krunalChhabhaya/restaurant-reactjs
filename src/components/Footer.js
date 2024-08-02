import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-left mb-4 mb-md-0">
            <h4 className='logo-txt mb-3'>Restaurant</h4>
            <p>Your restaurant's tagline or a short description goes here.</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FaFacebook /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaInstagram /></a>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <h4 className='mb-4'>Opening Hours</h4>
            <p>Monday: 9:00 AM - 10:00 PM</p>
            <p>Tuesday: 9:00 AM - 10:00 PM</p>
            <p>Wednesday: 9:00 AM - 10:00 PM</p>
            <p>Thursday: 9:00 AM - 10:00 PM</p>
            <p>Friday: 9:00 AM - 10:00 PM</p>
            <p>Saturday: 10:00 AM - 10:00 PM</p>
            <p>Sunday: 10:00 AM - 11:00 PM</p>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h4 className='mb-4'>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <Form className="d-flex justify-content-center justify-content-md-end">
              <Form.Control type="email" placeholder="Enter your email" className="me-2 mb-2 mb-md-0 input-news" />
              <Button className='rounded-0 news-btn'>Subscribe</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
