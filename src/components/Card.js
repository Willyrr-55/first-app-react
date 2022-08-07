import React from "react";

function Card(){
  return (
    <div className="testimonial-container">
      <img className="testomonial-image" alt="Fotografia de la card" src={require('../images/willy.jpeg')}/>   
      <div className="testimonial-text-container">
        <p className="testimonial-name">Willian Adonay Rosa Ramirez</p>
        <p className="job-position">Software Engineer</p>
        <p className="testimonial-text">Soy una persona apasionada al mundo del desarollo de software, me siento afortunado de pertenecer a esta industria porque me permite hacer cosas muy importantes y que peuden tener un impacto global, me apasiona desarrollar aplicaciones y estar en constante aprendizaje</p>
      </div>
    </div>
  );
}

export default Card;