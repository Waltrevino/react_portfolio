import React from "react";
import { ExternalLink } from "react-external-link"
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="footer d-flex border-top">
            <div className="footer-container align-self-center w-100">
            <Row className="footer-content d-flex justify-content-around">

                <div className="">
                    <ExternalLink href="https://github.com/Waltrevino"><i className="fab fa-github-square fa-3x"></i>
                    </ExternalLink>
                </div>
                <div className="footer-block-center text-center">
                    <div>Walter Zapata Echols</div>
                    <div className="copyright">&copy; {new Date().getFullYear()}  <span > &nbsp;WZE, Inc.</span></div>
                </div>
                <div>
                    <ExternalLink href="https://www.linkedin.com/in/walter-echols-01013813b/">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </ExternalLink>
                </div>
            </Row>
            </div>
        </footer>
    )
}

export default Footer;
