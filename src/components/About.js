import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import chef1 from '../imgs/chef-1.jpeg'; 
import chef2 from '../imgs/chef-2.jpeg';
import chef3 from '../imgs/chef-3.jpeg';
import chef4 from '../imgs/chef-4.jpeg';

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
                <h2 className='mb-5 home-pg-title'>Restaurant</h2>
              </div>
              <p className='about-text'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <span className='d-block'>Mon - Fri <strong>8 AM - 11 PM</strong></span>
              <span className='d-block'><a href='/about'>+1 519 748-5220</a> </span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* New section with 5 equal columns */}
      <div className='numbers-section '>
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

      {/* Chefs Section */}
      <Container className='my-5 chef-section'>
        <div className='heading-section text-center'>
          <span className='subheading'>Chefs</span>
          <h2 className='mb-5 home-pg-title'>Our Master Chefs</h2>
        </div>

        <Row className='mt-5'>
          <Col md={3} className='text-left'>
            <img src={chef1} alt='Chef 1' className='img-fluid mb-3' style={{ height: '320px', borderRadius: '5px' }} />
            <h3>Krunal Chhabhaya</h3>
            <span className='chef-name'>Head Chef</span>
          </Col>
          <Col md={3} className='text-left'>
            <img src={chef2} alt='Chef 2' className='img-fluid mb-3' style={{ height: '320px', borderRadius: '5px' }} />
            <h3>Shruti Patel</h3>
            <span className='chef-name'>Sous Chef</span>
          </Col>
          <Col md={3} className='text-left'>
            <img src={chef3} alt='Chef 3' className='img-fluid mb-3' style={{ height: '320px', borderRadius: '5px' }} />
            <h3>Anjali Thakkar</h3>
            <span className='chef-name'>Pastry Chef</span>
          </Col>
          <Col md={3} className='text-left'>
            <img src={chef4} alt='Chef 4' className='img-fluid mb-3' style={{ height: '320px', borderRadius: '5px' }} />
            <h3>Abhi Sharma</h3>
            <span className='chef-name'>Line Cook</span>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default About;
