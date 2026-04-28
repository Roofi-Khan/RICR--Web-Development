import React from "react";
import Description from "./Description";
import Title from "./Title";

function Card({image,title,description}) {
  return (
    <>
      <div>
        <img
        src={image}
        alt="Image"
        height={200}
        width={350}
      />
      <Title title={title}/>
      <Description description={description}/>
      </div>
    </>
  );
}

export default Card;
