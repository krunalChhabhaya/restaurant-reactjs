import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>About Us</h1>
          <p>Our restaurant was founded in 2020 with the mission to provide excellent dining experiences.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
