import React from "react";
import { Container, Col, Row, Jumbotron } from "react-bootstrap";

function Hero(props){
    return (
        <Jumbotron className="jumbotron-fluid bg-transparent p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col className="" md={8} sm={12}>
                    { props.title && <h1 className="text-center">{props.title}</h1>}
                    {/* { props.subTitle && <h3 className="text-center">{props.subTitle}</h3>} */}
                    { props.text && <h3 className="text-center">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;