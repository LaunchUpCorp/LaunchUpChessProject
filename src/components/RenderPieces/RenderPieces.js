import React from "react";
import { PieceLocation } from "../PieceLocation/PieceLocation";

const RenderPieces = ({ arr }) => {
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr[index].length; j++) {
      // White Pawns
      if ((index + arr.length - 1) % 2 === 0 && index === 1) {
        if (j % 2 === 0) {
          arr[index][j] = <PieceLocation piece={"pawn"} bgcolor={"bg-green"} />;
        } else {
          arr[index][j] = (
            <PieceLocation piece={"pawn"} bgcolor={"bg-orange"} />
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
            />
          );
        } else {
          arr[index][j] = (
            <PieceLocation
              piece={"pawn"}
              bgcolor={"bg-green"}
              pieceColor={"black"}
            />
          );
        }
      }

      // White Rooks
      if (index === 0) {
        if (j === 0) {
          arr[index][j] = <PieceLocation piece={"rook"} bgcolor={"bg-green"} />;
        } else {
          arr[index][j] = (
            <PieceLocation piece={"rook"} bgcolor={"bg-orange"} />
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
          />
        );
      } else if (j === 7 && index === 7) {
        arr[index][j] = (
          <PieceLocation
            piece={"rook"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
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
          />
        );
      } else if (index === 7 && j === 6) {
        arr[index][j] = (
          <PieceLocation
            piece={"knight"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
          />
        );
      } else if (index === 0 && j === 1) {
        arr[index][j] = (
          <PieceLocation piece={"knight"} bgcolor={"bg-orange"} />
        );
      } else if (index === 0 && j === 6) {
        arr[index][j] = <PieceLocation piece={"knight"} bgcolor={"bg-green"} />;
      }

      // bishop
      if (index === 7 && j === 2) {
        arr[index][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
          />
        );
      } else if (index === 7 && j === 5) {
        arr[index][j] = (
          <PieceLocation
            piece={"bishop"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
          />
        );
      } else if (index === 0 && j === 2) {
        arr[index][j] = <PieceLocation piece={"bishop"} bgcolor={"bg-green"} />;
      } else if (index === 0 && j === 5) {
        arr[index][j] = (
          <PieceLocation piece={"bishop"} bgcolor={"bg-orange"} />
        );
      }

      // Queen
      if ((index === 7) & (j === 4)) {
        arr[index][j] = (
          <PieceLocation
            piece={"queen"}
            bgcolor={"bg-green"}
            pieceColor={"black"}
          />
        );
      } else if (index === 0 && j === 3) {
        arr[index][j] = <PieceLocation piece={"queen"} bgcolor={"bg-orange"} />;
      }

      // King
      if ((index === 7) & (j === 3)) {
        arr[index][j] = (
          <PieceLocation
            piece={"king"}
            bgcolor={"bg-orange"}
            pieceColor={"black"}
          />
        );
      } else if (index === 0 && j === 4) {
        arr[index][j] = <PieceLocation piece={"king"} bgcolor={"bg-green"} />;
      }
    }
  }
  return arr;
};

export default RenderPieces;
