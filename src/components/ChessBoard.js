import React from "react";
import "./ChessBoard.css";
import RenderPieces from "./RenderPieces/RenderPieces";

const ChessBoard = () => {
  let arr = [];

  const handleClick = (rows, col) => {
    console.log(rows, col);
  };

  for (let rows = 0; rows < 8; rows++) {
    let temp = [];
    for (let col = 0; col < 8; col++) {
      if ((rows + col) % 2 === 0) {
        temp.push(
          <div
            onClick={() => {
              handleClick(rows, col);
            }}
            className={"bg-orange"}
          ></div>
        );
      } else {
        temp.push(
          <div
            onClick={() => {
              handleClick(rows, col);
            }}
            className={"bg-green"}
          ></div>
        );
      }
    }
    arr.push(temp);
  }

  return (
    <div className="flex items-center w-full h-screen mx-auto border-box">
      <div className="mx-auto flex justify-center items-center flex-wrap border-2 w-[500px] h-[500px] border-slate-900">
        {<RenderPieces arr={arr} />}
      </div>
    </div>
  );
};

export default ChessBoard;
