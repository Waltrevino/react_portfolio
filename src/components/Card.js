import React from 'react';

function Card(props) {
    return (
        <div className="d-inline-block g-card m-3">
            <div class="card-header text-center">
                {props.item.title}
            </div>
            <img className="card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />

            <div class="card-footer">
                <a href={props.item.appLink} class="card-link">Deployed App</a>
                <a href={props.item.githubLink} class="card-link">Github Repo</a>
            </div>
        </div>
    );

}

export default Card;