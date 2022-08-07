import React from "react";
import '../stylesheets/Card.css'

function Card(props){
  return (
    <div className="testimonial-container">
      <img className="testomonial-image" alt="Fotografia de la card" src={require('../images/principalPicture.jpg')}/>   
      <div className="testimonial-text-container">
        <p className="testimonial-name">{props.name}</p>
        <p className="job-position">{props.positionJob} at {props.company}</p>
        <hr/>
        <p className="testimonial-text">{props.testimonial}</p>
      </div>
    </div>
  );
}

export default Card;