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


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGitlab />
      </Col>
    </Row>
  );
}

export default Toolstack;
