import React from "react";
import bishopImage from "../../../../assets/images/bishop-image.png";
import whitebishopImage from "../../../../assets/images/white-bishop.png";

const Bishop = ({ color }) => {
  return (
    <>
      {color === "black" ? (
        <img
          src={bishopImage}
          alt="bishop"
          className="max-w-[40px] max-h-[40px]"
        />
      ) : (
        <img
          src={whitebishopImage}
          alt="bishop"
          className="max-w-[40px] max-h-[40px]"
        />
      )}
    </>
  );
};

export default Bishop;
