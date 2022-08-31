import React from "react";

import Card from "../Card/Card";

import "./CardContainer.css";

function CardContainer({ characters }) {
  return (
    <div className="card-container">
      {characters.results?.map((character) => {
        return <Card character={character} key={character.id} />;
      })}
    </div>
  );
}

export default CardContainer;
