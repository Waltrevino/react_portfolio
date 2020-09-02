import React from 'react';
import { ExternalLink } from "react-external-link"

function Card(props) {
    return (
        <div className="project-container">
            <div class="project-header text-center font-weight-bold text-light">
                {props.item.title}
            </div>
            <div className="card-bod d-flex justify-content-center">
            <img className="card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            </div>
            <div class="project-footer d-flex justify-content-around">
            <ExternalLink href={props.item.appLink} className="text-light">Run the App</ExternalLink>
            <ExternalLink href={props.item.githubLink} className="text-light">View The Code</ExternalLink>
            </div>
        </div>
    );
}

export default Card;