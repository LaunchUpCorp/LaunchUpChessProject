import React from "react";
import ChessBoard from "./components/ChessBoard";
<<<<<<< HEAD
import Pieces from "./components/Piece";
import {useState} from 'react';
=======
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
>>>>>>> feat/LUCP-104-storing-board-state

function App() {

  return (
<<<<<<< HEAD
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
=======
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<ChessBoard />} />
      </Routes>
>>>>>>> feat/LUCP-104-storing-board-state
    </div>
  );
}

export default App;
