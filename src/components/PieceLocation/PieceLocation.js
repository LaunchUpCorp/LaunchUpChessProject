import React from "react";
import Piece from "../Piece/Piece";

export const PieceLocation = ({ piece, bgcolor, pieceColor, row, col }) => {
  const handleClick = (row, col) => {
    console.log(row, col);
  };

  return (
    <div onClick={() => handleClick(row, col)} className={bgcolor}>
      <Piece piece={piece} color={pieceColor} />
    </div>
  );
};
