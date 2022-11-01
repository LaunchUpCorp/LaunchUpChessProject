import React from "react";
import queenImage from "../../../../assets/images/queen-image.png";
import whitequeenImage from "../../../../assets/images/white-queen.png";

const Queen = ({ color }) => {
  return (
    <>
      {color === "black" ? (
        <img
          src={queenImage}
          alt="queen"
          className="max-w-[40px] max-h-[40px]"
        />
      ) : (
        <img
          src={whitequeenImage}
          alt="queen"
          className="max-w-[40px] max-h-[40px]"
        />
      )}
    </>
  );
};

export default Queen;
