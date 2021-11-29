import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Button, Form } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_7Ts77RmiMqFfRg5qlARki");

const Contact = () => {
    const form = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, userId)
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.status, 'Bad Request');
            });
    };



    return (
        <Container fluid className="resume-section">
            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <h2 className='text-center purple fw-bold text-uppercase'>Get in touch with me</h2>
                    <div style={{ width: '22rem' }}>

                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Your Messege</Form.Label>
                                <Form.Control as="textarea" placeholder="messege"
                                    required
                                />
                            </Form.Group>
                            <Button type='submit' variant="primary" className='px-4 fw-bold'>
                                Send
                            </Button>
                        </Form>



                    </div>
                </Row>
            </Container>
        </Container>
    );
};

export default Contact;