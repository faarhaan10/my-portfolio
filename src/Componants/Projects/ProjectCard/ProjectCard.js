import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Card, Col } from 'react-bootstrap';
import { BiLinkExternal } from "react-icons/bi";
import { useHistory } from 'react-router';

const ProjectCard = ({ project }) => {
    const history = useHistory();

    const { id, title, thumbnail, description, liveSite, clientLink, serverLink } = project;


    const handleProject = id => {
        history.push(`projects/${id}`)
    }
    return (
        <Col md={4} className="project-card">
            <Card className="project-card-view cursor" onClick={() => handleProject(id)}>
                <Card.Img variant="top" src={thumbnail} alt="card-img" style={{ height: '195px' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                        {description}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Button variant="primary" href={liveSite} target="_blank">
                        <BiLinkExternal />
                        Live Link
                    </Button>
                    <Button variant="primary" href={clientLink} target="_blank">
                        <BiLinkExternal />
                        Front-End
                    </Button>
                    {serverLink && <Button variant="primary" href={serverLink} target="_blank">
                        <BiLinkExternal />
                        Back-End
                    </Button>}
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ProjectCard;