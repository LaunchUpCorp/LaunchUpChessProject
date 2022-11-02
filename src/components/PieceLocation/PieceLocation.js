import React from "react";
import Piece from "../Piece/Piece";

export const PieceLocation = ({ arr, row, col }) => {
  return (arr[row][col] = (
    <div className="w-[12.5%] h-[12.5%] border-2 border-black bg-green-600 p-[12px]">
      <Piece piece={"knight"} />
    </div>
  ));
};
