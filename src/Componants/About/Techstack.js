import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React JS">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node JS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongo DB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <h1 className="fw-bolder mt-5 fs-1">TS</h1>
      </Col>
    </Row>
  );
}

export default Techstack;
