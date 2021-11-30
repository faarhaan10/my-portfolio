
import React from 'react';
import { Container, Row, Button } from "react-bootstrap";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useDb from '../../Database/useDb';
import Slideshow from '../../Slideshow/Slideshow'

const ProjectDetails = () => {
    const { id } = useParams();
    const projects = useDb();
    const project = projects.find(project => project.id === parseInt(id));
    console.log(project)

    return (
        <Container fluid className="project-section">
            <Container>
                <div className="text-center">
                    <h1 className="project-heading"> <strong className="purple">{project.title}</strong>
                    </h1>
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Slideshow images={project.images} />
                    <div>
                        <br />
                        <p className="w-50 fw-bold text-white">{project.description}</p>
                        <p className="w-50 fw-bold text-white">Technology Used : {project.technologies}</p>
                        <p className="w-50 fw-bold text-white">Fuctionalities :</p>
                        <ul className=" text-white">
                            {
                                project.fuctionalities.map(data => <li
                                    key={data}
                                >{data}</li>)
                            }
                        </ul>

                    </div>
                    <div className="d-flex">
                        <Button variant="primary" href={project.liveSite} target="_blank" className='me-3'>
                            Live Site Link
                        </Button>
                        <Button variant="primary" href={project.clientLink} target="_blank" className='me-3'>
                            Client Site Code
                        </Button>
                        {project.serverLink && <Button variant="primary" href={project.serverLink} target="_blank" className='me-3'>
                            Server Site Code
                        </Button>}
                    </div>

                </Row>
            </Container>
        </Container>
    );
};

export default ProjectDetails;