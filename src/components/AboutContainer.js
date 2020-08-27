import React from "react";
import portfolio_img from "../assets/images/portfolio_img.jpg";

import { Form, Button, Row, Col, Card, Image } from "react-bootstrap";

function AboutContainer() {
    return (
        <Row className="mx-4">
            <Col md={6}>
                <Card className="border-0 ">

  <Row>
    <Col xs={6} md={12}>
    <Image src={portfolio_img} className="img-fluid" roundedCircle />
    </Col>
  </Row>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="h-100 border-0">
                    <Card.Header className="text-dark bg-white"><h4>Brief Description</h4></Card.Header>
                    <Card.Body>
                    <p className="lead">Software Engineer who loves creating and fixing things.  I enjoy transforming ideas into reality by using code and using the latest technology to build user friendly interactive webpages.  </p><p className="lead"> I am currently enrolled in the Full Stack Web Developer Bootcamp through the University of Texas at UT with graduation taking place at the end of August .</p>
                    <p className="lead">I am anxious to start working on new projects.  I want to design and develop custom websites using the latest technologies that I have been learning, such as HTML5, CSS, JavaScript, React.js, jQuery, Bootstrap, APIs, AJAX, MySQL, MongoDB, Node.js, Express.js, and GitHub.   </p>
                    <p className="lead">
                        My dream job is to work for a company that values innovation and worklife balance. And I will add value to that company by bringing my strong collaboration skills and expertise I that have acquired throughout my work history. 
                    </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default AboutContainer;