import React from "react";

import prework_about_me from "../assets/images/prework_about_me.png";
import weather_dashboard from "../assets/images/weather_dashboard1.png";
import quiz_challenge from "../assets/images/quiz_challenge.png";
import readme_generator from "../assets/images/readme_generator.gif";
import fitness_tracker from "../assets/images/fitness_tracker.gif";
import workday_scheduler from "../assets/images/workday_scheduler.jpg"
import note_taker from "../assets/images/note_taker.png";
import project1 from "../assets/images/project1.gif";
import budget_tracker from "../assets/images/budget_tracker.gif";
import employee_directory from "../assets/images/employee_directory.png";
import find_my_fare from "../assets/images/find_my_fare.png";
import code_refactor from "../assets/images/code_refactor.png";
import pocketdiy1 from "../assets/images/pocketdiy1.png"

import Card from './Card';
import { Container, Col, Row, Jumbotron } from "react-bootstrap";

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: "Weather Dashboard",
                    imgSrc: weather_dashboard,
                    appLink: "https://waltrevino.github.io/HW6/",
                    githubLink: "https://github.com/Waltrevino/HW6"
                },
                {

                    id: 7,
                    title: "Before You Buy",
                    imgSrc: project1,
                    appLink: "https://mmeleen.github.io/project1-g5/",
                    githubLink: "https://github.com/mmeleen/project1-g5/tree/master"
                },
                {
                    id: 10,
                    title: "Find My Fare",
                    imgSrc: find_my_fare,
                    appLink: "https://find-my-fare.herokuapp.com/",
                    githubLink: "https://github.com/elock721/Project-2-Idea"
                },
                {
                    id: 11,
                    title: "PocketDiY",
                    imgSrc: pocketdiy1,
                    appLink: "https://pocketdiy.herokuapp.com/",
                    githubLink: "https://github.com/coreyspratlan/PocketDIY"
                },
            ]
        }
    }

    renderProjects = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} md={12}/>
        })
    }

    render() {
        return(
            <Container fluid={true} className="cards-row-container d-flex">
                <Row className="d-flex d-line justify-content-center">
                   
                    {this.renderProjects(this.state.items)}
                   
                </Row>
            </Container>
        );
    }

}

export default Cards;
