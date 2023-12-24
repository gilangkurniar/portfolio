import { React, } from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="/" className='fw-semibold'>GKR</Navbar.Brand>
                <img src="/img/moon.png" id="toggle-icon" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className="nav-link">
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>About</NavLink>
                            <NavLink to="/projects" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>Projects</NavLink>
                            <NavLink to="/contact" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>Contact</NavLink>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent