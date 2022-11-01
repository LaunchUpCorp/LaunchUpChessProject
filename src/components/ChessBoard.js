import React from "react";

function ChessBoard() {
  let arr = [];
  for (let rows = 0; rows < 8; rows++) {
    let temp = [];
    for (let col = 0; col < 8; col++) {
      if ((rows + col) % 2 === 0) {
        temp.push(
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600"></div>
        );
      } else {
        temp.push(
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600"></div>
        );
      }
    }
    arr.push(temp);
  }

  return (
    <div className="border-box mx-auto w-full h-screen flex items-center">
      <div className="mx-auto flex justify-center items-center flex-wrap border-2 w-[500px] h-[500px] border-slate-900">
        {arr}
      </div>
    </div>
  );
}

export default ChessBoard;
