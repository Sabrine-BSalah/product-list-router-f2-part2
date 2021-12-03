import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="myNavbar">
        <Container>
          <Navbar.Brand href="#home">React router</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink exact to="/" className="navLink" activeClassName="selectedLink">Home</NavLink>
            <NavLink to="/products" className="navLink" activeClassName="selectedLink">Products</NavLink>
            <NavLink to="/about" className="navLink" activeClassName="selectedLink">About</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
