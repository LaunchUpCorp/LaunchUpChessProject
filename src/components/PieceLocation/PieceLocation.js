import React from "react";
import Piece from "../Piece/Piece";

export const PieceLocation = ({ piece, bgcolor, pieceColor }) => {
  return (
    <div className={bgcolor}>
      <Piece piece={piece} color={pieceColor} />
    </div>
  );
};
