import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";
import { FaJira, FaTrello, FaGithub } from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJira />
      </Col>


    </Row>
  );
}

export default Toolstack;
