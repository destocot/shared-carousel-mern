import { useEffect, useState } from "react";
import Image from "./Image";
import {
  CarouselStyles,
  ButtonsContainer,
} from "../styles/ImageCarousel.styled";

export default function ImageCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => fetchImages, []);

  const fetchImages = () => {
    fetch("api/images", {
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Last 10 Images Shared</h1>
      <button onClick={() => fetchImages()}>Fetch Images</button>
      <CarouselStyles>
        {images.map((image) => (
          <Image key={image._id} info={image} />
        ))}
      </CarouselStyles>
      <ButtonsContainer>
        <button
          onClick={() => {
            const old = images.slice();
            const newImage = old.shift();
            old.push(newImage);
            setImages(old);
          }}
        >
          {"<<"}
        </button>
        <button
          onClick={() => {
            const old = images.slice();
            const newImage = old.pop();
            old.unshift(newImage);
            setImages(old);
          }}
        >
          {">>"}
        </button>
      </ButtonsContainer>
    </div>
  );
}
