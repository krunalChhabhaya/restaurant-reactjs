import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };

    return (
        <Navbar className="navbar-custom sticky-top" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className='logo-txt'>Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className={isActive('/')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/menu" className={isActive('/menu')}>Menu</Nav.Link>
                        <Nav.Link as={Link} to="/about" className={isActive('/about')}>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={isActive('/contact')}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
