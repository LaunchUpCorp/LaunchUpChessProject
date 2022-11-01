import React from "react";
import Pawn from "./ui/Pawn";

const Pieces = ({ piece }) => {
  return (
    <div>
      <div>{piece === "pawn" ? <Pawn /> : " "}</div>
    </div>
  );
};

export default Pieces;
