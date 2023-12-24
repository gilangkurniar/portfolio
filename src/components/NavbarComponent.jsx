import { React, } from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

window.onload = function () {
    let icon = document.getElementById("toggle-icon")

    icon.onclick = function () {
        const nav = document.querySelector(".navbar-toggler")

        document.body.classList.toggle("dark")
        if (document.body.classList.contains("dark")) {
            nav.classList.toggle("navbar-dark")
            icon.src = "/img/sun.png"
        } else {
            nav.classList.remove("navbar-dark")
            nav.classList.toggle("navbar-light")
            icon.src = "/img/moon.png"
        }
    }
}

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