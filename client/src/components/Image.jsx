import { useState } from "react";
import { ImageContainerStyles } from "../styles/ImageContainer.styled";

export default function Image({ info }) {
  const [date, setDate] = useState(false);
  let { name, image, createdAt } = info;
  createdAt = createdAt || "??????????";

  return (
    <ImageContainerStyles onClick={() => setDate(!date)}>
      <h3>{name}</h3>
      <img src={image} alt="" />
      {date && (
        <div>
          <span>
            Submitted On
            <br />
            {createdAt.slice(0, 10)}
          </span>
        </div>
      )}
    </ImageContainerStyles>
  );
}
