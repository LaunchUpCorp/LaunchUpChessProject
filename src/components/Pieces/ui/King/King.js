import React from "react";
import kingImage from "../../../../assets/images/king-image.png";
import whitekingImage from "../../../../assets/images/white-king.png";

const King = ({ color }) => {
  return (
    <>
      {color === "black" ? (
        <img src={kingImage} alt="king" className="max-w-[40px] max-h-[40px]" />
      ) : (
        <img
          src={whitekingImage}
          alt="king"
          className="max-w-[40px] max-h-[40px]"
        />
      )}
    </>
  );
};

export default King;
