import React from "react";

import {Form, Button, Row, Col, Card} from "react-bootstrap";

function ContactForm(){
    return (
        <Row className="mx-4">
        <Col md={6}>
            <Card className="border-0 bg-light">
            <Card.Header className="bg-light font-weight-bold"><h4>Send Me A Message</h4></Card.Header>
<Form className="pt-4">
  <Form.Group controlId="formBasicName">
    <Form.Control type="text" placeholder="Your Name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Your Email" />
  </Form.Group>

  <Form.Group controlId="formBasicSubject">
    <Form.Control type="text" placeholder="Subject" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows="12" placeholder="Send me a message...." />
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card>
</Col>
<Col md={6}>
            <Card className="h-100 border-0 bg-light">
            <Card.Header className="text-dark bg-light"><h4>Get In Touch With Me</h4></Card.Header>
            <Card.Body>
                <p className="lead">If you want to know more about me or have any questions, fill the form and send me an email.</p><p className="lead"> You can also reach me via one of the links below to learn more about me.</p>
                
            </Card.Body>
            <Card.Footer className="bg-light">
            <div className="d-flex justify-content-around">
                    <a href="https://github.com/Waltrevino"> <i className="fab fa-github-square fa-3x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/walter-echols-01013813b/">
                    <i className="fab fa-linkedin fa-3x"></i>
                </a>
                <a href="https://www.facebook.com"> <i className="fab fa-facebook-square fa-3x"></i>
                    </a>
                </div>
            </Card.Footer>

</Card>
</Col>
</Row>    
    )
}

export default ContactForm;