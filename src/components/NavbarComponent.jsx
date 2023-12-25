import { React, useEffect, useState, } from 'react'
import { Container, Form, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const night = () => {
    let icon = document.getElementById("toggle-icon")

    icon.onclick = function () {
        const nav = document.querySelector(".navbar-toggler")
        const sun = document.getElementById("sun")
        const moon = document.getElementById("moon")

        document.body.classList.toggle("dark")
        if (document.body.classList.contains("dark")) {
            nav.classList.toggle("navbar-dark")
            sun.src = ""
            moon.src = "/img/moon.png"
        } else {
            nav.classList.remove("navbar-dark")
            nav.classList.toggle("navbar-light")
            moon.src = ""
            sun.src = "/img/sun.png"
        }
    }
}

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="/" className='fw-semibold'>GKR</Navbar.Brand>
                <div className="nightmode d-flex">
                    <img src="/img/sun.png" id='sun' className='me-2' width="22px" />
                    <Form.Check
                        type="switch"
                        id="toggle-icon"
                        onClick={night}
                    />
                    <img src="" id='moon' className='mx-1' height="18px" />
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