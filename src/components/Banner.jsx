import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRightCircle } from "react-icons/bs";

function Banner() {
    const toRotate = ["Web Developer", "Web Designer", "Freelancer", "React Developer", "MERN Stack Developer"];
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker); 
    }, [text]);

    function tick() {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else {
            setDelta(200 - Math.random() * 100);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Minul `}<br></br><span className="wrap">{text}</span></h1>
                        <button className='vvd' onClick={() => console.log("clicked")}>
                            Let's Connect <BsArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src="./header.png" alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
