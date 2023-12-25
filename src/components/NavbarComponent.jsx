import { React, } from 'react'
import { Container, Form, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

window.onload = function () {
    let icon = document.getElementById("toggle-icon")

    icon.onclick = function () {
        const nav = document.querySelector(".navbar-toggler")

        document.body.classList.toggle("dark")
        if (document.body.classList.contains("dark")) {
            nav.classList.toggle("navbar-dark")
        } else {
            nav.classList.remove("navbar-dark")
            nav.classList.toggle("navbar-light")
        }
    }
}

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="/" className='fw-semibold'>GKR</Navbar.Brand>
                <div className="nightmode d-flex">
                    <img src="/img/sun.png" className='me-2' width="22px" />
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="toggle-icon"
                    />
                    <img src="/img/moon.png" width="20px" />
                </div>
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