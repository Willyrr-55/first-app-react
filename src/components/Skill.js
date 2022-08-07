import React from "react";
import '../stylesheets/Skill.css'

function Skill(props){
  return (
    <div className="container">
      <a className="content">
        <img className="imgSkill" alt="Logo" src={require(`../images/${props.image}`)}/>
        <div className="text">
              <h4 >{props.name}</h4>
        </div>
      </a>
    </div>
  );
}

export default Skill;