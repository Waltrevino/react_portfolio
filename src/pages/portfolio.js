import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function PortfolioPage(props){
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Cards />
        </div>
    )
}

export default PortfolioPage;