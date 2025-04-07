import React from "react";
import Card from "react-bootstrap/Card";
import { MdOutlinePiano } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, Je suis <span className="purple">Rayen BEN HASSINE </span>
            <br />Je suis développeur junior et étudiant en cycle ingénieur en informatique à Sup-Galilée, université Sorbonne Paris Nord.
            <br />
            <br />
            Voici quelques autres activités que j'aime faire !

          </p>
          <ul>
            <li className="about-activity">
              <FaGamepad /> Jouer à des jeux vidéo
            </li>
            <li className="about-activity">
              <MdOutlinePiano /> Jouer du piano. Eh oui, avec un vrai diplôme 🎓🎶
            </li>
            <li className="about-activity">
              <CgGym /> Le sport
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
