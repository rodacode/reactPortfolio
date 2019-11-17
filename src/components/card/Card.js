import React from 'react';
import './card.scss';

const Card = (props) => {
        return (
                <div className="card">
                        <p>{props.title}</p>
                        <img src={props.imgSrc} alt="project-pic" />
                        <ul>
                        {props.stack.map(item => (
                         <li> <i className={item.icon}></i>{item.name}</li>
                        ))
                        }
                        </ul>
                </div >
        );
}

export default Card;
