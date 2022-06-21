import React from "react";
import Card from "./Card";

export default (props) => {
  const { min, max } = props;
  const aletoria = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title="Sorteio de um numero" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{aletoria}</strong>
        </span>
      </div>
    </Card>
  );
};
