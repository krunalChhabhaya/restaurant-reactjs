import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <header className="menu-header">
        <div className="header-content">
          <h1 className="crousel-heading">About Us</h1>
          <p className="menu-subtitle">Explore More About Our Culture</p>
        </div>
      </header>

      <div className='about-section'>
        <Container>
          <Row>
            <Col md={7} className='d-flex'>
              <div className='img img-1 me-md-2'></div>
              <div className='img img-2 ms-md-2'></div>
            </Col>
            <Col md={5} className='wrap-about pt-md-5 pb-md-3 pt-5'>
              <div className='heading-section mb-4 my-5 my-md-0'>
              <span className='subheading'>About</span>
              <h2 className='mb-4 home-pg-title'>Restaurant</h2>
              </div>
              <p className='about-text'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <span className='d-block'>Mon - Fri <strong>8 AM - 11 PM</strong></span>
              <span className='d-block'><a href='/about'>+1 519 748-5220</a> </span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* New section with 5 equal columns */}
      <div className='numbers-section'>
        <Container>
          <Row>
            <Col className='text-center'>
              <strong className='number'>100</strong>
              <span>Staff</span>
            </Col>
            <Col className='text-center'>
              <strong className='number'>50</strong>
              <span>Tables</span>
            </Col>
            <Col className='text-center'>
              <strong className='number'>20</strong>
              <span>Dishes</span>
            </Col>
            <Col className='text-center'>
              <strong className='number'>10</strong>
              <span>Chefs</span>
            </Col>
            <Col className='text-center'>
              <strong className='number'>5</strong>
              <span>Locations</span>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
};

export default About;
