import React from "react";
import Piece from "./components/Piece";

function App() {
  return (
    <div>
      <Piece piece={"pawn"} color={"black"} />
      <Piece piece={"knight"} color={"black"} />
      <Piece piece={"king"} color={"black"} />
      <Piece piece={"queen"} color={"black"} />
      <Piece piece={"bishop"} color={"black"} />
      <Piece piece={"rook"} color={"black"} />
      {/*  */}
      <Piece piece={"pawn"} />
      <Piece piece={"knight"} />
      <Piece piece={"king"} />
      <Piece piece={"queen"} />
      <Piece piece={"bishop"} />
      <Piece piece={"rook"} />
    </div>
  );
}

export default App;
