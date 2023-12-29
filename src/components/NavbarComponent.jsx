import { React, useEffect, useState, } from 'react'
import { Container, Form, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const DarkMode = () => {

    const setMode = () => {
        const body = document.querySelector("body")
        const icon = document.getElementById("mode")
        body.classList.toggle("dark")

        if (body.classList.contains("dark")) {
            icon.src = "/img/moon.png"
        } else {
            icon.src = "/img/sun.png"
        }
    }

    const toggleTheme = (e) => {
        if (e) setMode()
    }

    return (
        <div className="d-flex">
            <img src="/img/sun.png" onClick={toggleTheme} id='mode' width="22px" />
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