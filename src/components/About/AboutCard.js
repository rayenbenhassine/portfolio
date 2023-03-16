import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bonjour à tous, Je suis <span className="purple">Rayene BEN HASSINE </span>
            <br />Je suis développeur junior et étudiant en cycle ingénieur en informatique à Sup-Galilée, université Sorbonne Paris Nord.
            <br />
            <br />
            Voici quelques autres activités que j'aime faire !

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Jouer du piano (J'ai un diplôme de musique)
            </li>
            <li className="about-activity">
              <ImPointRight /> Le sport
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
