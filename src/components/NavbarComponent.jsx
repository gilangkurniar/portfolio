import { React, useEffect, useState, } from 'react'
import { Container, Form, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const DarkMode = () => {

    const setDarkMode = () => {
        const sun = document.getElementById("sun")
        const moon = document.getElementById("moon")

        document.querySelector("body").classList.toggle("dark")

        sun.src = ""
        moon.src = "/img/moon.png"
    }

    const setlightMode = () => {
        const sun = document.getElementById("sun")
        const moon = document.getElementById("moon")

        document.querySelector("body").classList.remove("dark")

        moon.src = ""
        sun.src = "/img/sun.png"
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode()
        else setlightMode()
    }

    return (
        <div className="nightmode d-flex">
            <img src="/img/sun.png" id='sun' className='me-2' width="22px" />
            <Form.Check
                type="switch"
                onClick={toggleTheme}
            />
            <img src="" id='moon' className='mx-1' height="18px" />
        </div>
    )
}

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="/" className='fw-semibold'>GKR</Navbar.Brand>
                <DarkMode />
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