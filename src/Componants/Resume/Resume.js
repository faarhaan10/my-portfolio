import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Farhan Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <Container fluid className="resume-section">
            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <div className='text-center'><Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button></div>
                </Row>
                <Row className="resume">
                    <div className='text-center'>
                        <Document file={pdf}>
                            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                        </Document></div>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <div className='text-center'><Button variant="primary" href={pdf} target="_blank">
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button></div>
                </Row>
            </Container>
        </Container>
    );
};

export default Resume;