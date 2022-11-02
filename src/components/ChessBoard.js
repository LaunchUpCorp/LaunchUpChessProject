import React from "react";
import Piece from "./Piece";

function ChessBoard() {
  const handleClick = (rows, col) => {
    console.log(rows, col);
  };

  let arr = [];
  for (let rows = 0; rows < 8; rows++) {
    let temp = [];
    for (let col = 0; col < 8; col++) {
      if ((rows + col) % 2 === 0) {
        temp.push(
          <div
            onClick={() => {
              handleClick(rows, col);
            }}
            className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600"
          ></div>
        );
      } else {
        temp.push(
          <div
            onClick={() => {
              handleClick(rows, col);
            }}
            className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600"
          ></div>
        );
      }
    }
    arr.push(temp);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if ((i + j) % 2 === 0) {
        arr[i][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 mx-auto">
            <Piece piece={"pawn"} />
          </div>
        );
      }
    }
  }

  return (
    <div className="flex items-center w-full h-screen mx-auto border-box">
      <div className="mx-auto flex justify-center items-center flex-wrap border-2 w-[500px] h-[500px] border-slate-900">
        {arr}
      </div>
    </div>
  );
}

export default ChessBoard;
