import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <header className="menu-header">
        <div className="header-content">
          <h1 className="crousel-heading">Contact Us</h1>
          <p className="menu-subtitle">Visit Us at our Locations</p>
        </div>
      </header>

      <Container>
        <Row className='contact-container'>
          {/* Google Maps */}
          <Col md={6}>
            <div className="map-responsive">
              <iframe 
                title="Conestoga College Location"  // Added title attribute
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.3961666097894!2d-80.40700802507148!3d43.38964836943864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9018e9e89adf%3A0x2043c24369ede07e!2sConestoga%20College%20Kitchener%20-%20Doon%20Campus!5e0!3m2!1sen!2sca!4v1723671523428!5m2!1sen!2sca" 
                width="500" 
                height="500" 
                style={{ border: 0 }}  
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          {/* Contact Us Form */}
          <Col md={6}>
            <h2 className='mb-4'>Contact Us</h2>
            <Form>
              <Form.Group controlId="formName" className='mb-3'>
                <Form.Control type="text" placeholder="Enter your name" className='contact-input' />
              </Form.Group>

              <Form.Group controlId="formEmail" className='mb-3'>
                <Form.Control type="email" placeholder="Enter your email" className='contact-input' />
              </Form.Group>

              <Form.Group controlId="formSubject" className='mb-3'>
                <Form.Control type="text" placeholder="Enter subject" className='contact-input' />
              </Form.Group>

              <Form.Group controlId="formMessage" className='mb-3'>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" className='contact-textarea' />
              </Form.Group>

              <Button type="submit" className='contact-button py-3 px-5'>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
