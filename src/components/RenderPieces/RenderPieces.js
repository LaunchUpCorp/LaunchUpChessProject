import React from "react";
import { PieceLocation } from "../PieceLocation/PieceLocation";

const RenderPieces = ({ arr }) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // White Pawns
      if (i === 1) {
        if (j % 2 === 0) {
          arr[i][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-green"}
              row={i}
              col={j}
            />
          );
        } else {
          arr[i][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-orange"}
              row={i}
              col={j}
            />
          );
        }
      }

      // Black Pawns
      if (i === arr.length - 2) {
        if (j % 2 === 0) {
          arr[i][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-orange"}
              pieceColor={"black"}
              row={i}
              col={j}
            />
          );
        } else {
          arr[i][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-green"}
              pieceColor={"black"}
              row={i}
              col={j}
            />
          );
        }
      }

      // White Rooks
      if (i === 0) {
        if (j === 0) {
          arr[i][j] = (
            <PieceLocation
              piece={"rook"}
              bgcolor={"bg-orange"}
              row={i}
              col={j}
            />
          );
        } else {
          arr[i][j] = (
            <PieceLocation
              piece={"rook"}
              bgcolor={"bg-green"}
              row={i}
              col={j}
            />
          );
        }
      }

      // Black Rooks
      if (i === 7 && j === 0) {
        arr[i][j] = (
          <PieceLocation
            piece={"rook"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
            row={i}
            col={j}
          />
        );
      } else if (j === 7 && i === 7) {
        arr[i][j] = (
          <PieceLocation
            piece={"rook"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
            row={i}
            col={j}
          />
        );
      }

      // knight
      if (i === 7 && j === 1) {
        arr[i][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
            row={i}
            col={j}
          />
        );
      } else if (i === 7 && j === 6) {
        arr[i][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
            row={i}
            col={j}
          />
        );
      } else if (i === 0 && j === 1) {
        arr[i][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-green"}
            row={i}
            col={j}
          />
        );
      } else if (i === 0 && j === 6) {
        arr[i][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-orange"}
            row={i}
            col={j}
          />
        );
      }

      // bishop
      if (i === 7 && j === 2) {
        arr[i][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
            row={i}
            col={j}
          />
        );
      } else if (i === 7 && j === 5) {
        arr[i][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
            row={i}
            col={j}
          />
        );
      } else if (i === 0 && j === 2) {
        arr[i][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-orange"}
            row={i}
            col={j}
          />
        );
      } else if (i === 0 && j === 5) {
        arr[i][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-green"}
            row={i}
            col={j}
          />
        );
      }

      // Queen
      if (i === 7 && j === 4) {
        arr[i][j] = (
          <PieceLocation
            piece={"queen"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
            row={i}
            col={j}
          />
        );
      } else if (i === 0 && j === 3) {
        arr[i][j] = (
          <PieceLocation piece={"queen"} bgcolor={"bg-green"} row={i} col={j} />
        );
      }

      // King
      if (i === 7 && j === 3) {
        arr[i][j] = (
          <PieceLocation
            piece={"king"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
            row={i}
            col={j}
          />
        );
      } else if (i === 0 && j === 4) {
        arr[i][j] = (
          <PieceLocation piece={"king"} bgcolor={"bg-orange"} row={i} col={j} />
        );
      }
    }
  }
  return arr;
};

export default RenderPieces;
