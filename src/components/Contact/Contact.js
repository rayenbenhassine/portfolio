import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqapglra", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      alert("Une erreur est survenue.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Container fluid className="contact-section">
      <h1 className="heading-name">
        Je suis dispo pour échanger,
        <strong className="main-name"> n'hésitez pas à écrire !</strong>
      </h1>

      <Row className="justify-content-center">
        <Col md={6}>

          {success && (
            <Alert variant="success" onClose={() => setSuccess(false)} dismissible className="mini-alert py-2 px-3 mt-3">
              Super, votre message est bien parti 🚀 <br /> À très bientôt 👨‍💻
            </Alert>

          )}
          <Form onSubmit={handleSubmit} className="p-4 rounded shadow-lg contact-form">
            <Form.Group className="mb-3 text-start">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label>Objet</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-4 text-start">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                required
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <div className="text-start">
              <Button type="submit" variant="outline-light" className="px-5" disabled={sending}>
                {sending ? "Envoi en cours..." : "Send"}
              </Button>
            </div>
          </Form>

        </Col>
      </Row>

      <Particle />
    </Container >
  );
}

export default Contact;
