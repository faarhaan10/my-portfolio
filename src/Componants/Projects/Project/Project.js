import React from 'react';
import { Container, Row } from "react-bootstrap";
import useDb from '../../Database/useDb';
import ProjectCard from '../ProjectCard/ProjectCard';


const Project = () => {
    const projects = useDb();
    return (
        <Container fluid className="project-section">
            <Container>
                <div className="text-center">
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Works </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few projects I've worked on recently.
                    </p>
                </div>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    {
                        projects.map(project => <ProjectCard
                            key={project.id}
                            project={project}
                        ></ProjectCard>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Project;