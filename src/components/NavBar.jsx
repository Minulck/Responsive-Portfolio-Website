import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const [Scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function onUpdateActiveLink(link) {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={Scroll ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src="./logo.png" alt="" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
                        <Nav.Link href="Skills" className="navbar-link">Skills</Nav.Link>
                        <Nav.Link  href="Projects" className="navbar-link">Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhrhJEQ383QCvlpQSf660zZnDpxchlHDyLA&s" alt="" /></a>
                            <a href="#"><img src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" alt="" /></a>
                        </div>
                        <button className='vvd' onClick={() => { console.log("clicked"); }}>Let's Connect</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;