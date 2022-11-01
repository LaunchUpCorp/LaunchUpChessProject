import React from "react";
import ChessBoard from "./components/ChessBoard";
import Pieces from "./components/Pieces/Pieces";

function App() {
  return (
    <div>
      <ChessBoard />
      <Pieces piece={"pawn"} />
    </div>
  );
}

export default App;
