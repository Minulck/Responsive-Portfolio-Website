import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRightCircle } from "react-icons/bs";

function Banner() {

    const [Loopnum, setLoopnum] =useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const Rotate = ["Web Developer","Web Designer","UI/UX Designer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300-Math.random()*1000);
    const period =2000;

    useEffect(()=>{

    })
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Minul `}<span className="wrap">web developer</span> </h1>
                        <button className='vvd' onClick={() => { console.log("clicked"); }}>Let's Connect <BsArrowRightCircle size={25} /></button>
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
