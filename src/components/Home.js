import React from 'react';
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaRegComment } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import carouselImage1 from '../imgs/bg_1.jpeg';
import carouselImage2 from '../imgs/bg_2.jpeg';
import carouselImage3 from '../imgs/bg_3.jpeg';

// Import icons/images for cards
import storyIcon from '../imgs/story_icon.png';
import menuIcon from '../imgs/menu_icon.png';
import visitIcon from '../imgs/visit_icon.png';

// Import images for popular dishes
import dish1 from '../imgs/breakfast-2.jpeg';
import dish2 from '../imgs/breakfast-3.jpeg';
import dish3 from '../imgs/breakfast-4.jpeg';
import dish4 from '../imgs/breakfast-6.jpeg';

// Import images for testimonials
import customer1 from '../imgs/person_1.jpeg';
import customer2 from '../imgs/person_3.jpeg';
import customer3 from '../imgs/person_4.jpeg';

import blogImage1 from '../imgs/image_1.jpeg';
import blogImage2 from '../imgs/image_2.jpeg';
import blogImage3 from '../imgs/image_3.jpeg';


const Home = () => {
  return (
    <>
      <Carousel className='home-sections'>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100"
              src={carouselImage1}
              alt="First slide"
            />
            <div className="carousel-caption-overlay">
              <Carousel.Caption className="carousel-caption">
                <h3 className='crousel-heading'>Delicious Food</h3>
                <p>Experience the taste of gourmet dishes.</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100"
              src={carouselImage2}
              alt="Second slide"
            />
            <div className="carousel-caption-overlay">
              <Carousel.Caption className="carousel-caption">
                <h3 className='crousel-heading'>Cozy Ambiance</h3>
                <p>Enjoy your meal in a beautiful setting.</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100"
              src={carouselImage3}
              alt="Third slide"
            />
            <div className="carousel-caption-overlay">
              <Carousel.Caption className="carousel-caption">
                <h3 className='crousel-heading'>Expert Chefs</h3>
                <p>Our chefs bring you the best culinary experience.</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5 home-sections">
        <div className='heading-section text-center'>
          <span className='subheading'>Explore</span>
          <h2 className='mb-4 home-pg-title'>Our Services</h2>
        </div>
        <Row>
          <Col md={4}>
            <Card className="text-center rounded-0 srvc-card">
              <Card.Img variant="top" src={storyIcon} />
              <Card.Body>
                <Card.Title>Our Story</Card.Title>
                <Card.Text>
                  Our restaurant was founded with the mission to provide excellent dining experiences through quality food and exceptional service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center rounded-0 srvc-card">
              <Card.Img variant="top" src={menuIcon} />
              <Card.Body>
                <Card.Title>Our Menu</Card.Title>
                <Card.Text>
                  We offer a wide variety of dishes to satisfy every palate, from appetizers to desserts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center rounded-0 srvc-card">
              <Card.Img variant="top" src={visitIcon} />
              <Card.Body>
                <Card.Title>Visit Us</Card.Title>
                <Card.Text>
                  Located in the heart of the city, our restaurant is the perfect place for any occasion.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className='my-5 home-sections'>
        <div className='heading-section text-center'>
          <span className='subheading'>Specialties</span>
          <h2 className='mb-4 home-pg-title'>Popular Dishes</h2>
        </div>
        <Row>
          <Col md={3} className="text-center">
            <img src={dish1} alt="Dish 1" className="rounded-circle dish-img" />
            <h3 className='dish-name'>Grilled Beef with potatoes</h3>
            <p className='dish-ingredients'>
              <span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span>
            </p>
          </Col>
          <Col md={3} className="text-center">
            <img src={dish2} alt="Dish 2" className="rounded-circle dish-img" />
            <h3 className='dish-name'>Grilled Beef with potatoes</h3>
            <p className='dish-ingredients'>
              <span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span>
            </p>
          </Col>
          <Col md={3} className="text-center">
            <img src={dish3} alt="Dish 3" className="rounded-circle dish-img" />
            <h3 className='dish-name'>Grilled Beef with potatoes</h3>
            <p className='dish-ingredients'>
              <span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span>
            </p>
          </Col>
          <Col md={3} className="text-center">
            <img src={dish4} alt="Dish 4" className="rounded-circle dish-img" />
            <h3 className='dish-name'>Grilled Beef with potatoes</h3>
            <p className='dish-ingredients'>
              <span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span>
            </p>
          </Col>
        </Row>
      </Container>

      {/* New Reservation Section */}
      <div className="reservation-section p-5 home-sections">
        <Container className="reservation-container p-5">
          <Row className="d-flex">
            <Col md={7} className="p-4 px-md-5 pb-md-5 bg-white reservation-form">
              <div className='heading-section text-center mb-3'>
                <span className='subheading-2'>Book a table</span>
                <h2 className='mb-4 home-pg-title-2'>Make Reservation</h2>
              </div>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formFirstName" className='mb-3'>
                      <Form.Label className='mb-0'>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formLastName" className='mb-3'>
                      <Form.Label className='mb-0'>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPhone" className='mb-3'>
                      <Form.Label className='mb-0'>Phone</Form.Label>
                      <Form.Control type="text" placeholder="Enter phone number" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className='mb-3'>
                      <Form.Label className='mb-0'>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formDate" className='mb-3'>
                      <Form.Label className='mb-0'>Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formTime" className='mb-3'>
                      <Form.Label className='mb-0'>Time</Form.Label>
                      <Form.Control type="time" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formMessage" className='mb-3'>
                  <Form.Label className='mb-0'>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" className='rounded-0'>Make a Reservation</Button>
                </div>
              </Form>
            </Col>
            <Col md={5}>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimony Section */}
      <Container className='my-5 home-sections'>
        <div className='heading-section text-center'>
          <span className='subheading'>Testimony</span>
          <h2 className='mb-5 home-pg-title'>Happy Customer</h2>
        </div>
        <Row>
          <Col md={4} className="text-center">
            <div className="customer-img-wrapper">
              <img src={customer1} alt="Customer 1" className="rounded-circle customer-img" />
              <span className="quote-icon"><i className="fas fa-quote-left"></i></span>
            </div>
            <div className='p-3'>
              <p className='customer-message'>
                "This is the best restaurant I've ever been to. The food is amazing and the service is excellent."
              </p>
              <h3 className='customer-name'>John Doe</h3>
              <p className='customer-role'>CUSTOMER</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="customer-img-wrapper">
              <img src={customer2} alt="Customer 2" className="rounded-circle customer-img" />
              <span className="quote-icon"><i className="fas fa-quote-left"></i></span>
            </div>
            <div className='p-3'>
              <p className='customer-message'>
                "A wonderful dining experience with a cozy ambiance. Highly recommended!"
              </p>
              <h3 className='customer-name'>Jane Smith</h3>
              <p className='customer-role'>CUSTOMER</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="customer-img-wrapper">
              <img src={customer3} alt="Customer 3" className="rounded-circle customer-img" />
              <span className="quote-icon"><i className="fas fa-quote-left"></i></span>
            </div>
            <div className='p-3'>
              <p className='customer-message'>
                "Fantastic food and great service. I will definitely come back again with my friends!"
              </p>
              <h3 className='customer-name'>Michael Johnson</h3>
              <p className='customer-role'>CUSTOMER</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Blog Section */}
      <Container className='my-5 home-sections'>
        <div className='heading-section text-center'>
          <span className='subheading'>Blog</span>
          <h2 className='mb-5 home-pg-title'>Recent Posts</h2>
        </div>
        <Row>
          <Col md={4} className="text-center">
            <Card className="mb-4 rounded-0">
              <Card.Img variant="top" src={blogImage1} className='blog-img rounded-0' />
              <Card.Body>
                <div className="d-flex justify-content-between text-muted mb-2">
                  <span>July 30, 2024</span>
                  <span>John Doe</span>
                </div>
                <Card.Title className='blog-title my-4'>New Menu Launch</Card.Title>
                <div className="d-flex justify-content-between">
                  <a href="/menu" className="blog-link">Read More</a>
                  <span className="d-flex align-items-center">
                    <FaRegComment className="me-1" /> 12
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="mb-4 rounded-0">
              <Card.Img variant="top" src={blogImage2} className='blog-img rounded-0' />
              <Card.Body>
                <div className="d-flex justify-content-between text-muted mb-2">
                  <span>July 29, 2024</span>
                  <span>Jane Smith</span>
                </div>
                <Card.Title className='blog-title my-4'>Chef's Special Recipe</Card.Title>
                <div className="d-flex justify-content-between">
                  <a href="/menu" className="blog-link">Read More</a>
                  <span className="d-flex align-items-center">
                    <FaRegComment className="me-1" /> 8
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="mb-4 rounded-0">
              <Card.Img variant="top" src={blogImage3} className='blog-img rounded-0' />
              <Card.Body>
                <div className="d-flex justify-content-between text-muted mb-3">
                  <span>July 28, 2024</span>
                  <span>Alice Johnson</span>
                </div>
                <Card.Title className='blog-title my-4'>Wine Pairing Tips</Card.Title>
                <div className="d-flex justify-content-between">
                  <a href="/menu" className="blog-link">Read More</a>
                  <span className="d-flex align-items-center">
                    <FaRegComment className="me-1" /> 5
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
