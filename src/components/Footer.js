import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return (
        <footer className="footer">
            <Container fluid={false}>
                <Row className="border-top justify-content-center p-3">
                    <Col className="p-0 text-center" md={12} sm={12}>
                    <p>Copyight &copy; 2020 by <span className="font-weight-bold">Walter Zapata Echols</span>. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;