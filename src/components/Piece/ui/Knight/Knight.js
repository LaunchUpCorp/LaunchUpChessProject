import React from "react";
import knightImage from "../../../../assets/images/knight-image.png";
import whiteknightImage from "../../../../assets/images/white-knight.png";

const Knight = ({ color }) => {
  return (
    <>
      {color === "black" ? (
        <img
          src={knightImage}
          alt="knight"
          className="max-w-[40px] max-h-[40px]"
        />
      ) : (
        <img
          src={whiteknightImage}
          alt="knight"
          className="max-w-[40px] max-h-[40px]"
        />
      )}
    </>
  );
};

export default Knight;
