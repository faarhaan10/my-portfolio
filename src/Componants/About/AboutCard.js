import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple"> Farhan Elias </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.

            <br />
            <br />
            Here are a Few Highlights:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full Stack web and mobile development
            </li>
            <li className="about-activity">
              <ImPointRight /> Interactive Front End as per the design
            </li>
            <li className="about-activity">
              <ImPointRight /> React and React Native
            </li>
            <li className="about-activity">
              <ImPointRight /> Redux for State Mnanagement
            </li>
            <li className="about-activity">
              <ImPointRight /> Building REST API
            </li>
            <li className="about-activity">
              <ImPointRight /> Managing database
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
