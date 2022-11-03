import React from "react";
import { PieceLocation } from "../PieceLocation/PieceLocation";

const RenderPieces = ({ arr }) => {
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr[index].length; j++) {
      // White Pawns
      if ((index + arr.length - 1) % 2 === 0 && index === 1) {
        if (j % 2 === 0) {
          arr[index][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-green"}
              row={index}
              col={j}
            />
          );
        } else {
          arr[index][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-orange"}
              row={index}
              col={j}
            />
          );
        }
      }

      // Black Pawns
      if ((index + arr.length) % 2 === 0 && index === arr.length - 2) {
        if (j % 2 === 0) {
          arr[index][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-orange"}
              pieceColor={"black"}
              row={index}
              col={j}
            />
          );
        } else {
          arr[index][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-green"}
              pieceColor={"black"}
              row={index}
              col={j}
            />
          );
        }
      }

      // White Rooks
      if (index === 0) {
        if (j === 0) {
          arr[index][j] = (
            <PieceLocation
              piece={"rook"}
              bgcolor={"bg-green"}
              row={index}
              col={j}
            />
          );
        } else {
          arr[index][j] = (
            <PieceLocation
              piece={"rook"}
              bgcolor={"bg-orange"}
              row={index}
              col={j}
            />
          );
        }
      }

      // Black Rooks
      if (index === 7 && j === 0) {
        arr[index][j] = (
          <PieceLocation
            piece={"rook"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
            row={index}
            col={j}
          />
        );
      } else if (j === 7 && index === 7) {
        arr[index][j] = (
          <PieceLocation
            piece={"rook"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
            row={index}
            col={j}
          />
        );
      }

      // knight
      if (index === 7 && j === 1) {
        arr[index][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
            row={index}
            col={j}
          />
        );
      } else if (index === 7 && j === 6) {
        arr[index][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
            row={index}
            col={j}
          />
        );
      } else if (index === 0 && j === 1) {
        arr[index][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-orange"}
            row={index}
            col={j}
          />
        );
      } else if (index === 0 && j === 6) {
        arr[index][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-green"}
            row={index}
            col={j}
          />
        );
      }

      // bishop
      if (index === 7 && j === 2) {
        arr[index][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
            row={index}
            col={j}
          />
        );
      } else if (index === 7 && j === 5) {
        arr[index][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
            row={index}
            col={j}
          />
        );
      } else if (index === 0 && j === 2) {
        arr[index][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-green"}
            row={index}
            col={j}
          />
        );
      } else if (index === 0 && j === 5) {
        arr[index][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-orange"}
            row={index}
            col={j}
          />
        );
      }

      // Queen
      if ((index === 7) & (j === 4)) {
        arr[index][j] = (
          <PieceLocation
            piece={"queen"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
            row={index}
            col={j}
          />
        );
      } else if (index === 0 && j === 3) {
        arr[index][j] = (
          <PieceLocation
            piece={"queen"}
            bgcolor={"bg-orange"}
            row={index}
            col={j}
          />
        );
      }

      // King
      if ((index === 7) & (j === 3)) {
        arr[index][j] = (
          <PieceLocation
            piece={"king"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
            row={index}
            col={j}
          />
        );
      } else if (index === 0 && j === 4) {
        arr[index][j] = (
          <PieceLocation
            piece={"king"}
            bgcolor={"bg-green"}
            row={index}
            col={j}
          />
        );
      }
    }
  }
  return arr;
};

export default RenderPieces;
