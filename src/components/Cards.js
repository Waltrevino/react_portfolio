import React from "react";

import prework_about_me from "../assets/images/prework_about_me.png";
import weather_dashboard from "../assets/images/weather_dashboard.png";
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

import Card from './Card';
import { Container, Col, Row, Jumbotron } from "react-bootstrap";

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "About Me",
                    imgSrc: prework_about_me,
                    appLink: "https://waltrevino.github.io/prework-about-me/",
                    githubLink: "https://github.com/Waltrevino/prework-about-me"
                },
                {
                    id: 1,
                    title: "Weather Dashboard",
                    imgSrc: weather_dashboard,
                    appLink: "https://waltrevino.github.io/HW6/",
                    githubLink: "https://github.com/Waltrevino/HW6"
                },
                {
                    id: 2,
                    title: "Quiz Challenge",
                    imgSrc: quiz_challenge,
                    appLink: "https://waltrevino.github.io/HW4/",
                    githubLink: "https://github.com/Waltrevino/HW4"
                },
                {
                    id: 3,
                    title: "README.md Generator",
                    imgSrc: readme_generator,
                    appLink: "https://drive.google.com/file/d/1jMqJVvYoKFAFU1Cd77l_kCfWOXn0Gddg/view",
                    githubLink: "https://github.com/Waltrevino/README_Generator"
                },
                {
                    id: 4,
                    title: "Fitness Tracker",
                    imgSrc: fitness_tracker,
                    appLink: "https://track-mi-workout.herokuapp.com/?id=5f305a4d6de1d80017a04546",
                    githubLink: "https://github.com/Waltrevino/workout_tracker"
                },
                {
                    id: 5,
                    title: "Workday Scheduler",
                    imgSrc: workday_scheduler,
                    appLink: "https://waltrevino.github.io/HW5/ ",
                    githubLink: "https://github.com/Waltrevino/HW5"
                },
                {
                    id: 6,
                    title: "Note Taker",
                    imgSrc: note_taker,
                    appLink: "https://wze-note-taker.herokuapp.com/",
                    githubLink: "https://github.com/Waltrevino/note_taker"
                },
                {
                    id: 7,
                    title: "Before You Buy",
                    imgSrc: project1,
                    appLink: "https://mmeleen.github.io/project1-g5/",
                    githubLink: "https://github.com/mmeleen/project1-g5/tree/master"
                },
                {
                    id: 8,
                    title: "Budget Tracker",
                    imgSrc: budget_tracker,
                    appLink: "https://oo-budget-tracker.herokuapp.com/",
                    githubLink: "https://github.com/Waltrevino/online_offline_budget_tracker"
                },
                {
                    id: 9,
                    title: "Employee Directory",
                    imgSrc: employee_directory,
                    appLink: "https://waltrevino.github.io/employee_directory/",
                    githubLink: "https://github.com/Waltrevino/employee_directory"
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
                    title: "Code Refactor",
                    imgSrc: code_refactor,
                    appLink: "https://waltrevino.github.io/HW1/",
                    githubLink: "https://github.com/Waltrevino/HW1"
                }
            ]
        }
    }

    renderCards = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.renderCards(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Cards;