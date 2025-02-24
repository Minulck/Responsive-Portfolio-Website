import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores suscipit obcaecati, nulla odio amet maxime fugit eligendi odit distinctio reprehenderit? Placeat dolorem sequi distinctio doloremque accusantium accusamus, voluptates nam!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="./meter1.svg" alt="" />
                                    <h5>Web development</h5>
                                </div>
                                <div className="item">
                                    <img src="./meter2.svg" alt="" />
                                    <h5>Graphic design</h5>
                                </div>
                                <div className="item">
                                    <img src="./meter3.svg" alt="" />
                                    <h5>Ui/UX Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src="./color-sharp.png" alt="" />
        </section>
    );
}

export default Skills;