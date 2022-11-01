import React from "react";
import Pawn from "./ui/Pawn";
import Knight from "./ui/Knight";
import King from "./ui/King";
import Bishop from "./ui/Bishop";
import Rook from "./ui/Rook";
import Queen from "./ui/Queen";

const Piece = ({ piece, color }) => {
  const chessBoardPieces = {
    pawn: <Pawn color={color} />,
    knight: <Knight color={color} />,
    bishop: <Bishop color={color} />,
    rook: <Rook color={color} />,
    queen: <Queen color={color} />,
    king: <King color={color} />,
  };

  return (
    <div>
      <div>{chessBoardPieces[piece]}</div>
    </div>
  );
};

export default Piece;
