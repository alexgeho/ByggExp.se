import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../img/logo.svg';
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const checkboxRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
        setOpenNav(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".CustomNavbar");
            if (!navbar) return;

            if (window.scrollY > 20) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleClick = () => {
        setOpenNav(prev => !prev);
    };

    return (
        <>

            {/* MENU ON MOBILE */}

            <nav className={`tot-nav ${openNav ? 'nav-open' : 'nav-close'}`}>
                <div className="tot-nav-box">
                    <NavLink onClick={toggleClick} to="/">Hem</NavLink>
                    <NavLink onClick={toggleClick} to="/about">Om oss</NavLink>
                    <NavLink onClick={toggleClick} to="/faq">FAQ</NavLink>
                    <NavLink onClick={toggleClick} to="/blog">Blog</NavLink>
                    <NavLink onClick={toggleClick} to="/Contacts">Kontakt</NavLink>

                    <div className='tot-nav-buttons'>
                        <Button
                            variant="outline-light"
                            className="px-3"
                            as={Link}
                            to="/login"
                            onClick={toggleClick}
                        >
                            Login
                        </Button>

                        <Button
                            variant="primary"
                            className="px-3"
                            as={Link}
                            to="/signup"
                            onClick={toggleClick}
                        >
                            Try for free
                        </Button>

                    </div>
                </div>
            </nav>

            <Navbar
                fixed="top"
                collapseOnSelect
                expand="md"
                style={{ backgroundColor: "#000509" }}
                variant="dark"
            >
                
                <Container className="custom-container d-flex align-items-center">

                    {/* LOGO */}

                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img
                            src={logo}
                            width="405"
                            height="156"
                            className="d-inline-block align-top logo-img"
                            alt="ByggExp Logo"
                        />
                    </Link>

                    <Navbar.Collapse id="responsive-navbar-nav">

                        {/* MENU DESCTOP */}

                        <Nav className="custom-nav mx-auto header-nav">
                            <Nav.Link as={Link} to="/">Hem</Nav.Link>
                            <Nav.Link as={Link} to="/about">Om oss</Nav.Link>
                            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/Contacts">Kontakt</Nav.Link>
                        </Nav>

                        {/* BOTTONS DESCTOP */}

                        <div className="HeaderButtons">
                            <Button
                                variant="outline-light"
                                className="px-3"
                                as={Link}
                                to="/login"
                            >
                                Login
                            </Button>
                            <Button
                                variant="primary"
                                className="px-3"
                                as={Link}
                                to="/signup"
                            >
                                Try for free
                            </Button>
                        </div>
                    </Navbar.Collapse>
                    

                    {/* BURGER */}

                    <input
                        ref={checkboxRef}
                        onClick={toggleClick}
                        type="checkbox"
                        id="checkbox"
                    />
                    <label htmlFor="checkbox" className="tot-toggle">
                        <div className="tot-bars" id="bar1"></div>
                        <div className="tot-bars" id="bar2"></div>
                        <div className="tot-bars" id="bar3"></div>
                    </label>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;