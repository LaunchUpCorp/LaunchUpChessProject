import React from "react";
import Piece from "./Piece";
import { PieceLocation } from "./PieceLocation/PieceLocation";

const ChessBoard = () => {
  let arr = [];

  let array = [];

  const handleClick = (rows, col) => {
    console.log(rows, col);
  };

  // let chessPiecesInitalLocations = {
  //   whiteRooks: [
  //     [0, 0],
  //     [0, 7],
  //   ],
  //   blackRooks: [
  //     [7, 0],
  //     [7, 7],
  //   ],
  // };

  for (let rows = 0; rows < 8; rows++) {
    let temp = [];
    for (let col = 0; col < 8; col++) {
      if ((rows + col) % 2 === 0) {
        temp.push(
          <div
            onClick={() => {
              handleClick(rows, col);
            }}
            className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]"
            // class="chessBoardEven"
          ></div>
        );
      } else {
        temp.push(
          <div
            onClick={() => {
              handleClick(rows, col);
            }}
            className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]"
            // class="chessBoardOdd"
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

      // Rooks
      if (index === 0) {
        if (j === 0) {
          arr[index][j] = (
            <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
              <Piece piece={"rook"} />
            </div>
          );
        } else if (j === 7) {
          arr[index][j] = (
            <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
              <Piece piece={"rook"} />
            </div>
          );
        }
      }

      if (index === 7 && j === 0) {
        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
            <Piece piece={"rook"} color="black" />
          </div>
        );
      } else if (j === 7 && index === 7) {
        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
            <Piece piece={"rook"} color="black" />
          </div>
        );
      }

      // knight
      if (index === 7 && j === 1) {
        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
            <Piece piece={"knight"} color="black" />
          </div>
        );
      } else if(index === 7 && j === 6) {
        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
            <Piece piece={"knight"} color="black" />
          </div>
        );
      } else if (index === 0 && j === 1) {
        <PieceLocation arr={arr} row={index} col={j} />;

        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
            <Piece piece={"knight"} />
          </div>
        );
      }else if (index === 0 && j === 6) {
        <PieceLocation arr={arr} row={index} col={j} />;

        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
            <Piece piece={"knight"} />
          </div>
        );}

      // bishop 
      if (index === 7 && j === 2) {
        arr[index][j] = ( 
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
            <Piece piece={"bishop"} color="black"/>
            </div>
        );
      } else if (index === 7 && j ===5) {
        arr[index][j] = ( 
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
            <Piece piece={"bishop"} color="black"/>
            </div>
        );
      } else if (index === 0 && j ===2) {
        <PieceLocation arr={arr} row={index} col={j} />;

        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
            <Piece piece={"bishop"} />
          </div>
        );
      }else if (index ===0 && j ===5) {
        <PieceLocation arr={arr} row={index} col={j} />;

        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
            <Piece piece={"bishop"} />
          </div>
        );
      }

      // Queen
      if (index === 7 & j === 3) {
        arr[index][j] = ( 
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
            <Piece piece={"queen"} color="black"/>
            </div>
        );
      } else if (index === 0 && j ===3) {
        <PieceLocation arr={arr} row={index} col={j} />;

        arr[index][j] = (
          <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
            <Piece piece={"queen"} />
          </div>
        );
      }
    
    // King
    if (index === 7 & j === 4) {
      arr[index][j] = ( 
        <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
          <Piece piece={"king"} color="black"/>
          </div>
      );
    } else if (index === 0 && j ===4) {
      // <PieceLocation arr={arr} row={index} col={j} />;

      arr[index][j] = (
        <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-amber-600 p-[12px]">
          <Piece piece={"king"} />
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
};

export default ChessBoard;
