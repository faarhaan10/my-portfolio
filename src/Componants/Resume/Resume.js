import React, { useState, useEffect } from "react";
import { Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Farhan Resume.pdf";
import resumeIMG from "../../Assets/resume.png";
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
                        <Image src={resumeIMG} fluid className='mx-auto' />
                    </div>
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