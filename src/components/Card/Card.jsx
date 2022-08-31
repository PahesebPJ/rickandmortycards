import React from "react";

import "./Card.css";

function Card({ character }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{character.name}</h2>
      </div>

      <div className="card-body">
        <img src={character.image} alt="" />
        <h3>{character.species}</h3>
      </div>

      <div className="card-footer">
        <h4>Status: {character.status}</h4>
      </div>
    </div>
  );
}

export default Card;
