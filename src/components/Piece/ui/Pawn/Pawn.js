import React from "react";
import pawnImage from "../../../../assets/images/pawn-image.png";
import whitePawnImage from "../../../../assets/images/white-pawn.png";

const Pawn = ({ color }) => {
  return (
    <>
      {color === "black" ? (
        <img src={pawnImage} alt="pawn" className="max-w-[40px] max-h-[40px]" />
      ) : (
        <img
          src={whitePawnImage}
          alt="pawn"
          className="max-w-[40px] max-h-[40px]"
        />
      )}
    </>
  );
};

export default Pawn;
