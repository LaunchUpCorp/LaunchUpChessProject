import React from "react";
import Pieces from "./components/Pieces";

function App() {
  return (
    <div>
      <Pieces piece={"pawn"} color={"black"} />
      <Pieces piece={"knight"} color={"black"} />
      <Pieces piece={"king"} color={"black"} />
      <Pieces piece={"queen"} color={"black"} />
      <Pieces piece={"bishop"} color={"black"} />
      <Pieces piece={"rook"} color={"black"} />
      {/*  */}
      <Pieces piece={"pawn"} />
      <Pieces piece={"knight"} />
      <Pieces piece={"king"} />
      <Pieces piece={"queen"} />
      <Pieces piece={"bishop"} />
      <Pieces piece={"rook"} />
    </div>
  );
}

export default App;
