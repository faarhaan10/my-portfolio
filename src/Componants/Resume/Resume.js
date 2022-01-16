import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Farhan Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
    const [width1, setWidth1] = useState(1200);

    useEffect(() => {
        setWidth1(window.innerWidth);
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
                    <div className='text-center' style={{ width: width1 }}>
                        <Document file={pdf} className='mx-auto w-full'>
                            <Page pageNumber={1} scale={width1 > 786 ? 1.9 : 0.5} />
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