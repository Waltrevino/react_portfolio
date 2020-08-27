import React from "react";
import Hero from "../components/Hero";
import AboutContainer from "../components/AboutContainer"

function AboutPage(props){
    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <AboutContainer />
        </div>
    )
}

export default AboutPage;