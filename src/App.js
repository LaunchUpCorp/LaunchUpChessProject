import React from "react";
import Piece from "./components/Piece";
import ChessBoard from "./components/ChessBoard";
import Pieces from "./components/Piece";
import {useState} from 'react';

function App() {

  return (
    <div class = "chessBoard">
      <ChessBoard />
      {/*  */}
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
      <Pieces piece={"pawn"} />
    </div>
  );
}

export default App;
