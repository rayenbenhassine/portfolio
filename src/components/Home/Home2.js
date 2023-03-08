import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              JE ME<span className="purple">  PRÉSENTE </span>
            </h1>
            <p className="home-about-body">
              Je suis tombé amoureux de la programmation et je pense que c'est sérieux.  🤷‍♂️
              <br />
              <br />Mes amis me trouvent bizarre parce que je parle souvent de langages de programmation comme s'ils étaient des personnes réelles. Je suis capable de programmer couramment en
              <i>
                <b className="purple"> Java, Javascript et Python. </b>
              </i>
              <br />
              <br />
              Mais mon véritable amour est
              <i>
                <b className="purple">Node.js  </b> et les frameworks JavaScript modernes.
              </i>
              J'aime tellement ça que je pourrais passer des heures à coder sans même me rendre compte que j'ai oublié de manger.
              <br />
              <br />
              Je suis tellement passionné par la création de  <i>
                <b className="purple"> nouveaux produits Web </b>
              </i> que j'ai commencé à avoir des rêves de syntaxe de code. Mais ne vous inquiétez pas, je ne suis pas totalement fou. Enfin, pas encore.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rayenbenhassine"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/rayen-ben-hassine/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>
            N'hésitez pas à me <span className="purple">contacter </span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
