import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restaurant from "../../Assets/Projects/restaurant.png";
import opuswebsite from "../../Assets/Projects/opuswebsite.png";
import opuslabelearning from "../../Assets/Projects/opuslabelearning.png";
import pdf from "../../Assets/rapport.pdf"
import { BsGithub } from "react-icons/bs";
import { DiAndroid, DiCss3, DiHtml5, DiMongodb, DiNodejs, DiPhp, DiReact } from "react-icons/di";
import { SiExpress, SiNextdotjs, SiStrapi, SiTailwindcss } from "react-icons/si";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Mes projets </strong> récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opuswebsite}
              isBlog={false}
              title="Opus Lab website"
              description="Ce site web permet aux visiteurs de consulter facilement les différents cours proposés par la société, avec des descriptions détaillées de chaque cours et des informations sur les horaires, les tarifs et les prérequis. Les visiteurs peuvent également préinscrire à un cours directement sur le site, en fournissant des informations de base sur leur profil et leur intérêt pour le cours. Cette fonctionnalité de préinscription permet à la société de mieux planifier ses cours en fonction de la demande, et permet aux visiteurs de s'assurer une place dans un cours avant qu'il ne soit complet."
              demoLink="https://www.opuslab.tn/"
              icons={
                [<SiNextdotjs/>, <SiStrapi />]
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opuslabelearning}
              isBlog={false}
              title="Opus Lab e-learning plateform"
              description="Opus Lab platform est une plateforme de formation en compétences numériques vise à offrir une expérience d'apprentissage de qualité en proposant un contenu riche et un suivi continu. Les étudiants peuvent gagner des points et des récompenses au fur et à mesure qu'ils progressent dans leur apprentissage. Nous encourageons également l'interaction entre les étudiants et les instructeurs en fournissant un forum de discussion où ils peuvent échanger des idées et poser des questions. Enfin, la plateforme permet aux instructeurs de suivre facilement l'avancement des étudiants et de fournir un feedback constructif pour améliorer leur apprentissage."
              rapport={pdf}
              icons={
                [<DiReact/>,<SiExpress />,<DiMongodb />, <SiTailwindcss />]
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Live dinner restaurant"
              description="C'est un site web de gestion de réservation de table pour restaurant offre une solution simple et efficace pour les restaurateurs et les clients. Grâce à une interface conviviale, les clients peuvent facilement réserver une table en ligne, avec des options pour spécifier le nombre de personnes, l'heure et les préférences alimentaires. Les restaurateurs peuvent également gérer facilement les réservations à l'aide de notre tableau de bord administrateur, qui permet de gérer les réservations, de visualiser les données de réservation et de communiquer avec les clients."
              ghLink="https://github.com/rayenbenhassine/Restaurant-App-php"
              icons={
                [<DiHtml5 />,<DiCss3 /> ,<DiPhp/>]
              }
            />
          </Col>
        </Row>
          
        
      </Container>
      <Button
          variant="primary"
          href="https://github.com/rayenbenhassine"
          target="_blank"
          style={{ padding: "30px", fontSize : "20px", cursor : "pointer" }}
        >
          <BsGithub style={{ fontSize : "30px" }}/> &nbsp;
          Voir plus sur GitHub
      </Button>
      <Particle />

    </Container>
  );
}

export default Projects;
