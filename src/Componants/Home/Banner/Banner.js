import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../../Assets/home-main.svg";
import Section from "../Section/Section";
import Type from "./Type/Type";

function Banner() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header primary">
                            <h4 style={{ paddingBottom: 0 }} className="heading text-center">
                                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                            </h4>

                            <h1 className="heading-name text-center">
                                I'M
                                <strong className="main-name"> FARHAN ELIAS</strong>
                            </h1>

                            <div className="text-center ">
                                <Type />
                            </div>
                            <div className="text-center ">
                                <Button variant="outline-success" className='me-5 rounded'>Hire me</Button>
                                <Button variant="info">Get Resume</Button>
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img src={homeLogo} alt="home pic" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Banner;
