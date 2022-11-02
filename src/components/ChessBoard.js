import React, { useEffect, useState } from "react";
import Piece from "./Piece";

const ChessBoard = () => {
  let arr = [];
  let array = [];

  const handleClick = (rows, col) => {
    console.log(rows, col);
  };

  let chessPiecesInitalLocations = {
    whiteRooks: [
      [0, 0],
      [0, 7],
    ],
    blackRooks: [
      [7, 0],
      [7, 7],
    ],
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

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    for (let j = 0; j < arr[index].length; j++) {
      // Pawns
      if ((index + arr.length - 1) % 2 === 0 && index === 1) {
        if (j % 2 === 0) {
          arr[index][j] = (
            <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
              <Piece piece={"pawn"} />
            </div>
          );
        } else {
          arr[index][j] = (
            <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
              <Piece piece={"pawn"} />
            </div>
          );
        }
      }
      // Black Pawns
      if ((index + arr.length) % 2 === 0 && index === arr.length - 2) {
        if (j % 2 !== 0) {
          arr[index][j] = (
            <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
              <Piece piece={"pawn"} color="black" />
            </div>
          );
        } else {
          arr[index][j] = (
            <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
              <Piece piece={"pawn"} color="black" />
            </div>
          );
        }
      }
    }
    console.log(element, index);
  }

  return (
    <div className="flex items-center w-full h-screen mx-auto border-box">
      <div className="mx-auto flex justify-center items-center flex-wrap border-2 w-[500px] h-[500px] border-slate-900">
        {arr}
      </div>
    </div>
  );
};

export default ChessBoard;
