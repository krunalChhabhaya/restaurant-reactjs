import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>Contact Us</h1>
          <p>Email: info@restaurant.com</p>
          <p>Phone: (123) 456-7890</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
