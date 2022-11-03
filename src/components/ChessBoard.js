import React from "react";
import "./ChessBoard.css";
import RenderPieces from "./RenderPieces/RenderPieces";
import { useState, useEffect } from "react";


// function activeBoard (){
//  const [board, activeBoard] = useState
// } 

const ChessBoard = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [array, setArray] = useState([]);

  const handleClick = (rows, col) => {
    console.log(rows, col);
  };



useEffect(() => {
  const loadCells = () => {
    let innerArray = [];
    for (let rows = 0; rows < 8; rows++) {
      for (let col = 0; col < 8; col++) {
        if ((rows + col) % 2 === 0) {
          innerArray.push(
            <div
            onClick={() => {
              handleClick(rows, col);
            }}
            className={"bg-orange"}
          ></div>
          );
        } else {
          innerArray.push(
            <div
              onClick={() => {
                handleClick(rows, col);
              }}
              className={"bg-green"}
            ></div>
          );
        }
        if(col === 7){
          innerArray = [];
        }
      }
    }
    return innerArray;
  }



  if(!hasLoaded){
    setArray(loadCells());
    setHasLoaded(true);
  }
}, [hasLoaded])
  
console.log(array)
  return (
    <div className="flex items-center w-full h-screen mx-auto border-box">
      <div className="mx-auto flex justify-center items-center flex-wrap border-2 w-[500px] h-[500px] border-slate-900">
        {<RenderPieces arr={array} />}
      </div>
    </div>
  );
};

export default ChessBoard;
