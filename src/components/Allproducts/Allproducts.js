import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from '../Home/Home';
import './Allproducts.css'
const Allproducts = () => {
    return (
        <div className='p-4 container'>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">Hooooomeyyyyy</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#pricing2">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1 className='p-4'>All Products</h1>
            <Home></Home>
        </div>
    );
};

export default Allproducts;