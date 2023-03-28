import shc from "../assets/shc.jpg";
import React from "react";
import { useState } from "react";

export default function Carousel(props: any) {
  const images = ["tas.jpg", "shc.jpg", "s3.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectedNewImage = (index: number, images: string[], next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
  };

  const previous = () => {
    selectedNewImage(selectedIndex, images, false);
    /* const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);  first analize data then reduce*/
  };

  const next = () => {
    selectedNewImage(selectedIndex, images, true);
    /* const condition = selectedIndex < images.length;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex); */
  };

  return (
    <>
      <img
        src={require(`assets/img/${selectedImage}`).default}
        alt="Gentleman"
      />
      <button onClick={previous}>{"<"}</button>
      <button onClick={next}>{">"}</button>
      {/* lazy loading */}
    </>
  );
}
