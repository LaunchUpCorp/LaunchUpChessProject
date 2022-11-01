import React from "react";
import rookImage from "../../../../assets/images/rook-image.png";
import whiterookImage from "../../../../assets/images/white-rook.png";

const Rook = ({ color }) => {
  return (
    <>
      {color === "black" ? (
        <img src={rookImage} alt="rook" className="max-w-[40px] max-h-[40px]" />
      ) : (
        <img
          src={whiterookImage}
          alt="rook"
          className="max-w-[40px] max-h-[40px]"
        />
      )}
    </>
  );
};

export default Rook;
