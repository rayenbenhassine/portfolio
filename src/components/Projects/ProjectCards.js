import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsFillJournalBookmarkFill } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" width="500%" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br/>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {
          props.icons?.map((icon) => {
            return (
            <Col xs={4} md={2} style={{fontSize : "40px"}}>
              {icon}
            </Col>
          )
          })
        }
        </Row>
        {props.ghLink && <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>}
        {"\n"}
        {"\n"}
        
  

        
        {props.rapport && <Button variant="primary" href={props.rapport} target="_blank">
          <BsFillJournalBookmarkFill/>&nbsp;
          Rapport
        </Button>}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
